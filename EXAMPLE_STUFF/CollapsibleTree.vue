<style lang="scss" scoped>
    @import "../../../colors.scss";

    .node {
        .circle {
            stroke-width: 1px;
        }
        .collapsible {
            cursor: pointer;
        }
        .component {
            fill: tint($sb-turk, 80%);
            stroke: $sb-turk;
        }
        .product {
            fill: tint($sb-turk, 20%);
            stroke: $sb-turk;
        }
        .collapsed {
            fill: $sb-grey !important;
        }
        .text {
            font: 12px sans-serif;
        }
        .highlight {
            fill: tint($sb-green, 20%) !important;
            stroke: $sb-grey;
            stroke-width: 2px;
        }
    }

    .link {
        fill: none;
        stroke: $sb-grey;
        stroke-width: 2px;
    }

    .placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 60vh;
    }

    .indent-left {
        padding-left: 1rem;
    }

    .subtitle {
        margin-bottom: 0.5rem;
    }
    .filter-header {
        min-height: 9rem;
        margin-bottom: 0;
    }
</style>

<template>
    <div>
        <div class="columns filter-header">
            <div class="column is-two-thirds">
                <h3 class="subtitle is-5">{{ $t('Filter product attributes') }}</h3>
                <div class="columns is-multiline is-mobile is-gapless">
                    <div class="column is-one-third" v-for="field in jsonFields">
                        <b-checkbox v-model="typeFilters[field.name]" :false-value="undefined">
                            {{ field.label }}
                        </b-checkbox>
                    </div>
                </div>
                <div v-if="!jsonFields || !jsonFields.length" class="is-size-7">
                    Select a product to see all relevant filter attributes with respect to its supply chain.
                </div>
            </div>
            <div class="column is-one-third">
                <h3 class="subtitle is-5">{{ $t('Detailed info') }}</h3>
                <div v-if="nodeInfo" class="columns is-size-7">
                    <div class="column">
                        Type: {{nodeInfo.type}}<br>
                        Name: {{nodeInfo.name}}
                    </div>
                    <div class="column">
                        <div v-for="(json, i) in nodeInfo.json">
                            <span v-if="i < 2">
                                {{json.options.label}}: {{json.value || 'false'}}<br>
                            </span>
                        </div>
                        <router-link v-if="nodeInfo.type==='Product'" :to="'/products/' + nodeInfo.id">more information...</router-link>
                    </div>
                </div>
                <div v-if="nodeInfo" class="is-size-7">
                    <div class="indent-left">
                    </div>
                </div>
                <div v-else class="is-size-7">
                    Load a product and hover over a node in the graph below to retrieve detailed information.
                </div>
            </div>
        </div>
        <svg v-if="data" id="product-tree" class="box" :width="width" :height="height">
            <defs>
            <clipPath id="clip-text">
            <rect x="0" y="-10px" width="120px" height="20px"/>
            </clipPath>
            </defs>
            <g :style="'transform: translate(' + this.margin.left + 'px, ' + this.margin.top + 'px)'">
            <g class="links" v-for="(link, index) in links"
                             :key="index"
                             v-if="! link.hidden">
            <path :key="'p' + index" class="link" :d="link.d"></path>
            </g>
            <g class="node" v-for="node in nodes"
                            :key="node.id"
                            v-if="! node.hidden"
                            :style="'transform: translate(' + node.y + 'px, ' + node.x + 'px)'"
                            @click="nodeClick(node)"
                            @mouseover="showInfo(node)">
              <circle class="circle"
                      :class="{
                      product: node.data.type == 'PRODUCT',
                      component: node.data.type == 'COMPONENT',
                      collapsed: node.collapsed,
                      collapsible: node.height > 0,
                      highlight: highlightNode(node)
                      }"
                      r="10px"></circle>
              <g v-if="node.height == 0" clip-path="url(#clip-text)">
              <text style="transform: translate(1rem, .3rem)" class="text" text-anchor="start">{{node.data.name}}</text>
            </g>
            <g v-else="" clip-path="url(#clip-text)" style="transform: translate(-4.5rem, -1rem)">
            <text v-if="node.data.type === 'PRODUCT'" style="transform: translate(2rem, .3rem)" class="text" text-anchor="start">{{node.data.name}}</text>
            </g>
            </g>
            </g>
        </svg>
        <div v-else class="box placeholder">
            {{$t('Start typing a product name to see its supplychain')}}
        </div>
    </div>
</template>

<script>
    import * as d3 from 'd3'
    import * as api from '../../../utils/api'
    import { isIn } from '../../../utils/helpers'

    import AutocompleteField from '../../../components/AutocompleteField.vue'
    import Logo from '../../../components/Logo.vue'

    export default {
        components: {
            AutocompleteField,
            Logo
        },
        name: 'CollapsibleTree',
        data() {
            return {
                productsAutocompleteUri: api.acProductsUri,
                data: undefined,
                typeFilters: {},
                treeData: {},
                windowWidth: window.innerWidth,
                width: 0,
                height: 0,
                margin: { top: 0, right: 113, bottom: 30, left: 113 },
                hierarchy: {},
                nodes: [],
                links: [],
                showComponents: true,
                products: [],
                product: '',
                selectedProduct: 0,
                nodeInfo: null
            }
        },
        props: {
            initialId: {
                type: Number
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.width = this.$el.clientWidth - 40
            })
            window.addEventListener('resize', this.onResize);
            this.$store.dispatch('isLoading', true)
            api.acMyProducts()
                .then(response => {
                    this.products = response.data
                    this.$store.dispatch('isLoading', false)
                })
                .catch(() => {
                    this.$store.dispatch('isLoading', true)
                })
            this.onResize()
            if (this.initialId) {
                this.productSelected({'id': this.initialId})
            }
        },
        beforeDestroy: function () {
            window.removeEventListener('resize', this.onResize)
        },
        methods: {
            highlightNode(node) {
                for (let filter in this.typeFilters) {
                    let filterValue = this.typeFilters[filter]
                    for (let jd in node.data.json) {
                        let jsonData = node.data.json[jd]
                        if (jsonData.options.type === 'boolean' && jsonData.options.name === filter && jsonData.value === true && filterValue === true) {
                            return true
                        }
                        if (jsonData.options.type === 'string' && jsonData.options.name === filter && isIn(jsonData.value, filterValue)) {
                            return true
                        }
                    }
                }
                return false
            },
            showInfo(node) {
                this.nodeInfo = {}
                let nodeData = node.data
                this.nodeInfo.id = nodeData.id
                this.nodeInfo.name = nodeData.name
                if (nodeData.type === 'COMPONENT') {
                    this.nodeInfo.type = 'Component'
                } else if (nodeData.type === 'PRODUCT') {
                    this.nodeInfo.type = 'Product'
                    this.nodeInfo.json = nodeData.json
                }
            },
            productSelected(option) {
                if (!option) return
                api.getSupplyChainForProduct(option.id)
                    .then(response => {
                        this.$router.push('/dashboard/supplychain/' + option.id)
                        this.data = response.data[0]
                        this.treeData = Object.assign({}, this.data)
                        this.redraw()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            onResize() {
                this.width = this.$el.clientWidth
                this.height = 600
                this.redraw()
            },
            redraw() {
                // Set the dimensions and margins of the diagram
                let tree = d3.tree().size([
                    this.height - this.margin.top - this.margin.bottom,
                    this.width - this.margin.left - this.margin.right
                ]);
                this.hierarchy = d3.hierarchy(this.treeData, function(d) { return d.children; })
                let layouted = tree(this.hierarchy)
                this.nodes = layouted.descendants()

                this.links = layouted.descendants().slice(1)
                for (let id in this.links) {
                    let link = this.links[id]
                    link.d = this.diagonal(
                        {x: link.parent.x, y: link.parent.y},
                        {x: link.x, y: link.y})
                }
            },
            showHideComponents() {
                this.showComponents = !this.showComponents
                for (var i in this.nodes) {
                    if (this.nodes[i].data.type === 'COMPONENT') {
                        var nodeId = this.nodes[i].data.id
                        this.$set(this.nodes[i], 'hidden', !this.showComponents)
                        for (var j in this.links) {
                            if (this.links[j].data.id === nodeId) {
                                this.$set(this.links[j], 'hidden', !this.showComponents)
                            }
                        }
                    }
                }
            },
            nodeClick(node) {
                if (node.data.type === 'PRODUCT') {
                    this.$router.push('/products/' + node.data.id)
                } else {
                    if (node.height > 0) this.collapse(node)
                }
            },
            toggleSubtree(node) {
                this.$set(node, 'hidden', !node.hidden)
                if (!node.collapsed) {
                    if (node.children) {
                        node.children.forEach(this.toggleSubtree)
                    }
                }
            },
            collapse(node) {
                this.$set(node, 'collapsed', !node.collapsed)
                if (node.children) {
                    node.children.forEach(this.toggleSubtree)
                }
            },
            collapseAll() {
                for (let height = (this.hierarchy.height - 1); height >= 1; height--) {
                    for (let index in this.nodes) {
                        let node = this.nodes[index]
                        if (node.depth === height && node.children) {
                            this.collapse(this.nodes[index])
                        }
                    }
                }
            },
            /**
             * Creates curved (diagonal) path path string between source and destination node
             *   Example: <path :d="diagonal(x,y)"></path>
             * @param s source node, needs to have .x, .y
             * @param d destination node, needs to have .x, .y
             * @returns {string}
             */
            diagonal (s, d) {
                let path = `M ${s.y} ${s.x}
                            C ${(s.y + d.y) / 2} ${s.x},
                              ${(s.y + d.y) / 2} ${d.x},
                              ${d.y} ${d.x}`
                return path
            }
        },
        computed: {
            posProducts() {
                return this.products.filter(p => p.is_pos === true)
            },
            jsonFields() {
                let filterNames = new Set()
                let filters = []
                for (let index in this.nodes) {
                    let json = this.nodes[index].data.json
                    if (json) {
                        for (let fieldIndex in json) {
                            let options = json[fieldIndex].options
                            if (!filterNames.has(options.name)) {
                                filterNames.add(options.name)
                                console.log(options)
                                if (options.type === 'boolean') {
                                    filters.push(options)
                                }
                            }
                        }
                    }
                }
                return filters
            }
        }
    }
</script>
