<style lang="scss" scoped>
  @import '../colors';

  .node {
    .circle {
      stroke-width: 1px;
    }
    .component {
      fill: tint($sb-turk, 80%);
      stroke: $sb-turk;
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
</style>

<template>
  <div class="wrapper">
    <svg v-if="sc" id="canvas" :width="width" :height="height">
      <!--<g class="links" v-for="(link, index) in links"-->
         <!--:key="index"-->
         <!--v-if="! link.hidden">-->
        <!--<path :key="'p' + index" class="link" :d="link.d"></path>-->
      <!--</g>-->
      <!--<g class="node" v-for="node in nodes"-->
         <!--:key="node.id"-->
         <!--v-if="! node.hidden"-->
         <!--:style="'transform: translate(' + node.y + 'px, ' + node.x + 'px)'"-->
         <!--@click="nodeClick(node)"-->
         <!--@mouseover="showInfo(node)">-->
         <!--<circle class="circle"-->
                 <!--:class="{-->
                       <!--product: node.data.type == 'PRODUCT',-->
                       <!--component: node.data.type == 'COMPONENT',-->
                       <!--collapsed: node.collapsed,-->
                       <!--collapsible: node.height > 0,-->
                       <!--highlight: highlightNode(node)-->
                       <!--}"-->
                 <!--r="10px"></circle>-->
      <!--</g>-->
    </svg>
    <br/>
    <div>json to visualize: {{sc}}</div>
  </div>
</template>

<script>
export default {
  name: 'SupplyChainCanvas',
  mounted () {
    /* stuff that needs to be done to draw the visualization */
  },
  props: {
    sc: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      /* any data that is modified/used (read write) in this component */
      width: '800',
      height: '400'
    }
  },
  computed: {
    /* stuff that should change automatically in case props or data change */
    /* you can call these computed props in the template */
  },
  methods: {
    /* methods, as in plain js, but can access computed and data via this. */
    /* you can call these methods in the template */
  }
}
</script>
