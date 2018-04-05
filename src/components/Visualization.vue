<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #32679A;
  }
</style>

<template>
  <div>
    <h1>Select data</h1>
    <select v-model="selected">
      <option v-for="(level, id) in levels" :value="level" :key="id" >{{level}}</option>
    </select>
    <br>
    <span>Selected: {{ selected }}</span><br/>

    <hr/>

    <supply-chain-canvas :sc="selectedData"></supply-chain-canvas>
  </div>
</template>

<script>
import SupplyChainCanvas from './SupplyChainCanvas'

export default {
  name: 'Visualization',
  components: {SupplyChainCanvas},
  data () {
    return {
      selected: '',
      data: {
        empty: { },
        productsNew: [
          {
            'rdb_id': 296,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 11,
                  'name': 'Warehouse'
                },
                'id': 152,
                'company': {
                  'id': 126,
                  'name': 'Better Chemicals'
                },
                'name': 'Better chemicals warehouse'
              },
              'filter': false,
              'thumbnail': '/backend/static/media/CACHE/images/attachments/img/4E5tyWYSBy/a5162eb92c645d31f6ae236f5e813e8a.png',
              'name': 'Omega Power (Packed)',
              'processes': [],
              'item_nr': '123456',
              'dummy': false,
              'description': null,
              'id': 296,
              'completeness': '0.80',
              'product_type': {
                'id': 19,
                'name': 'Agricultural Product'
              },
              'created_on': '2018-03-29T07:28:20.938305Z',
              'modified_on': '2018-03-29T07:28:20.938341Z'
            },
            'db_id': 93517,
            'filter': false,
            'created': 1522821850465,
            'name': 'Omega Power (Packed)',
            'dummy': false
          },
          {
            'rdb_id': 297,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 156,
                'company': {
                  'id': 130,
                  'name': 'Supplier_0'
                },
                'name': 'Supplier facility 0'
              },
              'filter': false,
              'thumbnail': null,
              'name': 'Omega Power (Powder)',
              'processes': [],
              'item_nr': '32345678',
              'dummy': false,
              'description': null,
              'id': 297,
              'completeness': '0.80',
              'product_type': {
                'id': 19,
                'name': 'Agricultural Product'
              },
              'created_on': '2018-03-29T07:28:21.271047Z',
              'modified_on': '2018-03-29T07:28:21.271105Z'
            },
            'db_id': 93518,
            'filter': false,
            'created': 1522821850467,
            'name': 'Omega Power (Powder)',
            'parents_id': [
              93518
            ],
            'dummy': false
          },
          {
            'rdb_id': 300,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 153,
                'company': {
                  'id': 127,
                  'name': 'Syn Omega'
                },
                'name': 'Soy Factory'
              },
              'filter': false,
              'thumbnail': '/backend/static/media/CACHE/images/attachments/img/YhQq44jpQw/a51846abad99a206a344e21bc61362cd.png',
              'name': 'Gold Star Soy',
              'processes': [],
              'item_nr': 'AA84647883YZ',
              'dummy': false,
              'description': null,
              'id': 300,
              'completeness': '0.80',
              'product_type': {
                'id': 19,
                'name': 'Agricultural Product'
              },
              'created_on': '2018-03-29T07:28:22.021702Z',
              'modified_on': '2018-03-29T07:28:22.021737Z'
            },
            'db_id': 93521,
            'filter': false,
            'created': 1522821850471,
            'name': 'Gold Star Soy',
            'parents_id': [
              93521
            ],
            'dummy': false
          },
          {
            'rdb_id': 301,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 160,
                'company': {
                  'id': 134,
                  'name': 'Supplier_4'
                },
                'name': 'Supplier facility 4'
              },
              'filter': false,
              'thumbnail': '/backend/static/media/CACHE/images/attachments/img/HTmGe4w3MR/54567816453d7ead15f6287769f75af3.png',
              'name': 'Syn Omega',
              'processes': [],
              'item_nr': '234562343',
              'dummy': false,
              'description': null,
              'id': 301,
              'completeness': '0.80',
              'product_type': {
                'id': 19,
                'name': 'Agricultural Product'
              },
              'created_on': '2018-03-29T07:28:22.375040Z',
              'modified_on': '2018-03-29T07:28:22.375086Z'
            },
            'db_id': 93522,
            'filter': false,
            'created': 1522821850474,
            'name': 'Syn Omega',
            'parents_id': [
              93522
            ],
            'dummy': false
          },
          {
            'rdb_id': 299,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 158,
                'company': {
                  'id': 132,
                  'name': 'Supplier_2'
                },
                'name': 'Supplier facility 2'
              },
              'filter': false,
              'thumbnail': null,
              'name': 'Vitamin Powder',
              'processes': [],
              'item_nr': '224352678',
              'dummy': false,
              'description': null,
              'id': 299,
              'completeness': '0.80',
              'product_type': {
                'id': 19,
                'name': 'Agricultural Product'
              },
              'created_on': '2018-03-29T07:28:21.817090Z',
              'modified_on': '2018-03-29T07:28:21.817205Z'
            },
            'db_id': 93520,
            'filter': false,
            'created': 1522821850470,
            'name': 'Vitamin Powder',
            'parents_id': [
              93520
            ],
            'dummy': false
          },
          {
            'rdb_id': 298,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 157,
                'company': {
                  'id': 131,
                  'name': 'Supplier_1'
                },
                'name': 'Supplier facility 1'
              },
              'filter': false,
              'thumbnail': null,
              'name': 'Wheat (Packed)',
              'processes': [],
              'item_nr': '232345678',
              'dummy': false,
              'description': null,
              'id': 298,
              'completeness': '0.80',
              'product_type': {
                'id': 19,
                'name': 'Agricultural Product'
              },
              'created_on': '2018-03-29T07:28:21.577781Z',
              'modified_on': '2018-03-29T07:28:21.577834Z'
            },
            'db_id': 93519,
            'filter': false,
            'created': 1522821850468,
            'name': 'Wheat (Packed)',
            'parents_id': [
              93519
            ],
            'dummy': false
          },
          {
            'rdb_id': 305,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 164,
                'company': {
                  'id': 138,
                  'name': 'Supplier_8'
                },
                'name': 'Supplier facility 8'
              },
              'filter': false,
              'thumbnail': null,
              'name': 'Potassium',
              'processes': [],
              'item_nr': '3234562343',
              'dummy': false,
              'description': null,
              'id': 305,
              'completeness': '0.80',
              'product_type': {
                'id': 19,
                'name': 'Agricultural Product'
              },
              'created_on': '2018-03-29T07:28:23.453186Z',
              'modified_on': '2018-03-29T07:28:23.453220Z'
            },
            'db_id': 93526,
            'filter': false,
            'created': 1522821850480,
            'name': 'Potassium',
            'parents_id': [
              93526
            ],
            'dummy': false
          },
          {
            'rdb_id': 303,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 162,
                'company': {
                  'id': 136,
                  'name': 'Supplier_6'
                },
                'name': 'Supplier facility 6'
              },
              'filter': false,
              'thumbnail': null,
              'name': 'Agri Sweet',
              'processes': [],
              'item_nr': '32347773',
              'dummy': false,
              'description': null,
              'id': 303,
              'completeness': '0.80',
              'product_type': {
                'id': 19,
                'name': 'Agricultural Product'
              },
              'created_on': '2018-03-29T07:28:22.943309Z',
              'modified_on': '2018-03-29T07:28:22.943347Z'
            },
            'db_id': 93524,
            'filter': false,
            'created': 1522821850476,
            'name': 'Agri Sweet',
            'parents_id': [
              93524
            ],
            'dummy': false
          },
          {
            'rdb_id': 302,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 161,
                'company': {
                  'id': 135,
                  'name': 'Supplier_5'
                },
                'name': 'Supplier facility 5'
              },
              'filter': false,
              'thumbnail': null,
              'name': 'Wheat (from Storage)',
              'processes': [],
              'item_nr': '3234562343',
              'dummy': false,
              'description': null,
              'id': 302,
              'completeness': '0.80',
              'product_type': {
                'id': 19,
                'name': 'Agricultural Product'
              },
              'created_on': '2018-03-29T07:28:22.706689Z',
              'modified_on': '2018-03-29T07:28:22.706724Z'
            },
            'db_id': 93523,
            'filter': false,
            'created': 1522821850475,
            'name': 'Wheat (from Storage)',
            'parents_id': [
              93523
            ],
            'dummy': false
          },
          {
            'rdb_id': 319,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 179,
                'company': {
                  'id': 153,
                  'name': 'Supplier_23'
                },
                'name': 'A Sugar cane farmer 23'
              },
              'filter': false,
              'thumbnail': '/backend/static/media/CACHE/images/attachments/img/4nxbxt93UP/4451d0c0b77b1ab8fe111c45f73ac391.png',
              'name': 'Sugar Cane',
              'processes': [],
              'item_nr': '4245245248',
              'dummy': false,
              'description': null,
              'id': 319,
              'completeness': '0.80',
              'product_type': {
                'id': 21,
                'name': 'Raw Sugar Cane'
              },
              'created_on': '2018-03-29T07:28:38.503661Z',
              'modified_on': '2018-03-29T07:28:38.503694Z'
            },
            'db_id': 93539,
            'filter': false,
            'created': 1522821850505,
            'name': 'Sugar Cane',
            'parents_id': [
              93539
            ],
            'dummy': false
          },
          {
            'rdb_id': 318,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 178,
                'company': {
                  'id': 152,
                  'name': 'Supplier_22'
                },
                'name': 'A Sugar cane farmer 22'
              },
              'filter': false,
              'thumbnail': '/backend/static/media/CACHE/images/attachments/img/agnquF99bx/e561719cea545ae2a0bf9bfbd6292c3e.png',
              'name': 'Sugar Cane',
              'processes': [],
              'item_nr': '4245245247',
              'dummy': false,
              'description': null,
              'id': 318,
              'completeness': '0.80',
              'product_type': {
                'id': 21,
                'name': 'Raw Sugar Cane'
              },
              'created_on': '2018-03-29T07:28:36.959576Z',
              'modified_on': '2018-03-29T07:28:36.959608Z'
            },
            'db_id': 93538,
            'filter': false,
            'created': 1522821850503,
            'name': 'Sugar Cane',
            'parents_id': [
              93538
            ],
            'dummy': false
          },
          {
            'rdb_id': 317,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 177,
                'company': {
                  'id': 151,
                  'name': 'Supplier_21'
                },
                'name': 'A Sugar cane farmer 21'
              },
              'filter': false,
              'thumbnail': '/backend/static/media/CACHE/images/attachments/img/YSfgYVVjnp/f48e80cb27d0b25194b6ee4f6e50017e.png',
              'name': 'Sugar Cane',
              'processes': [],
              'item_nr': '4245245246',
              'dummy': false,
              'description': null,
              'id': 317,
              'completeness': '0.80',
              'product_type': {
                'id': 21,
                'name': 'Raw Sugar Cane'
              },
              'created_on': '2018-03-29T07:28:35.546854Z',
              'modified_on': '2018-03-29T07:28:35.546888Z'
            },
            'db_id': 93535,
            'filter': false,
            'created': 1522821850497,
            'name': 'Sugar Cane',
            'parents_id': [
              93535
            ],
            'dummy': false
          },
          {
            'rdb_id': 316,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 176,
                'company': {
                  'id': 150,
                  'name': 'Supplier_20'
                },
                'name': 'A Sugar cane farmer 20'
              },
              'filter': false,
              'thumbnail': '/backend/static/media/CACHE/images/attachments/img/6czeKwXw2N/9b3512e419461abd4366ed82c52894ee.png',
              'name': 'Sugar Cane',
              'processes': [],
              'item_nr': '4245245245',
              'dummy': false,
              'description': null,
              'id': 316,
              'completeness': '0.80',
              'product_type': {
                'id': 21,
                'name': 'Raw Sugar Cane'
              },
              'created_on': '2018-03-29T07:28:34.143079Z',
              'modified_on': '2018-03-29T07:28:34.143111Z'
            },
            'db_id': 93534,
            'filter': false,
            'created': 1522821850495,
            'name': 'Sugar Cane',
            'parents_id': [
              93534
            ],
            'dummy': false
          },
          {
            'rdb_id': 315,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 175,
                'company': {
                  'id': 149,
                  'name': 'Supplier_19'
                },
                'name': 'A Sugar cane farmer 19'
              },
              'filter': false,
              'thumbnail': '/backend/static/media/CACHE/images/attachments/img/mGe5rqjMkk/f687ae7ec74d9e183d4596c7b81af8bb.png',
              'name': 'Sugar Cane',
              'processes': [],
              'item_nr': '4245245244',
              'dummy': false,
              'description': null,
              'id': 315,
              'completeness': '0.60',
              'product_type': {
                'id': 21,
                'name': 'Raw Sugar Cane'
              },
              'created_on': '2018-03-29T07:28:32.626387Z',
              'modified_on': '2018-03-29T07:28:40.463562Z'
            },
            'db_id': 93537,
            'filter': false,
            'created': 1522821850502,
            'name': 'Sugar Cane',
            'parents_id': [
              93537
            ],
            'dummy': false
          },
          {
            'rdb_id': 314,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 174,
                'company': {
                  'id': 148,
                  'name': 'Supplier_18'
                },
                'name': 'A Sugar cane farmer 18'
              },
              'filter': false,
              'thumbnail': '/backend/static/media/CACHE/images/attachments/img/tPL6Den7vQ/57b1298d6dbd3558b6264fec54c4628e.png',
              'name': 'Sugar Cane',
              'processes': [],
              'item_nr': '4245245243',
              'dummy': false,
              'description': null,
              'id': 314,
              'completeness': '0.60',
              'product_type': {
                'id': 21,
                'name': 'Raw Sugar Cane'
              },
              'created_on': '2018-03-29T07:28:30.664969Z',
              'modified_on': '2018-03-29T07:28:40.196891Z'
            },
            'db_id': 93536,
            'filter': false,
            'created': 1522821850499,
            'name': 'Sugar Cane',
            'parents_id': [
              93536
            ],
            'dummy': false
          },
          {
            'rdb_id': 313,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 173,
                'company': {
                  'id': 147,
                  'name': 'Supplier_17'
                },
                'name': 'A Sugar cane farmer 17'
              },
              'filter': false,
              'thumbnail': '/backend/static/media/CACHE/images/attachments/img/25YhkhQbRR/c40dc88c1968ee421b0969b250393577.png',
              'name': 'Sugar Cane',
              'processes': [],
              'item_nr': '4245245242',
              'dummy': false,
              'description': null,
              'id': 313,
              'completeness': '0.60',
              'product_type': {
                'id': 21,
                'name': 'Raw Sugar Cane'
              },
              'created_on': '2018-03-29T07:28:28.933804Z',
              'modified_on': '2018-03-29T07:28:39.979724Z'
            },
            'db_id': 93540,
            'filter': false,
            'created': 1522821850506,
            'name': 'Sugar Cane',
            'parents_id': [
              93540
            ],
            'dummy': false
          },
          {
            'rdb_id': 312,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 172,
                'company': {
                  'id': 146,
                  'name': 'Supplier_16'
                },
                'name': 'A Sugar cane farmer 16'
              },
              'filter': false,
              'thumbnail': '/backend/static/media/CACHE/images/attachments/img/J2B7karxuQ/5f81fd51b7399c6cecfb34e796026df5.png',
              'name': 'Sugar Cane',
              'processes': [],
              'item_nr': '4245245241',
              'dummy': false,
              'description': null,
              'id': 312,
              'completeness': '0.80',
              'product_type': {
                'id': 21,
                'name': 'Raw Sugar Cane'
              },
              'created_on': '2018-03-29T07:28:27.244530Z',
              'modified_on': '2018-03-29T07:28:27.244564Z'
            },
            'db_id': 93533,
            'filter': false,
            'created': 1522821850493,
            'name': 'Sugar Cane',
            'parents_id': [
              93533
            ],
            'dummy': false
          },
          {
            'rdb_id': 311,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 171,
                'company': {
                  'id': 145,
                  'name': 'Supplier_15'
                },
                'name': 'A Sugar cane farmer 15'
              },
              'filter': false,
              'thumbnail': '/backend/static/media/CACHE/images/attachments/img/JhvhTSNrDL/3daf624ea3a1d32d866ff492c329a34b.png',
              'name': 'Sugar Cane',
              'processes': [],
              'item_nr': '4245245240',
              'dummy': false,
              'description': null,
              'id': 311,
              'completeness': '0.80',
              'product_type': {
                'id': 21,
                'name': 'Raw Sugar Cane'
              },
              'created_on': '2018-03-29T07:28:25.365579Z',
              'modified_on': '2018-03-29T07:28:25.365639Z'
            },
            'db_id': 93532,
            'filter': false,
            'created': 1522821850491,
            'name': 'Sugar Cane',
            'parents_id': [
              93532
            ],
            'dummy': false
          },
          {
            'rdb_id': 310,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 170,
                'company': {
                  'id': 144,
                  'name': 'Supplier_14'
                },
                'name': 'Supplier facility 14'
              },
              'filter': false,
              'thumbnail': null,
              'name': 'Wheat Raw Material',
              'processes': [],
              'item_nr': '711111113',
              'dummy': false,
              'description': null,
              'id': 310,
              'completeness': '0.86',
              'product_type': {
                'id': 20,
                'name': 'Agricultural Raw Material'
              },
              'created_on': '2018-03-29T07:28:24.914478Z',
              'modified_on': '2018-03-29T07:28:24.914512Z'
            },
            'db_id': 93531,
            'filter': false,
            'created': 1522821850489,
            'name': 'Wheat Raw Material',
            'parents_id': [
              93531
            ],
            'dummy': false
          },
          {
            'rdb_id': 309,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 169,
                'company': {
                  'id': 143,
                  'name': 'Supplier_13'
                },
                'name': 'Supplier facility 13'
              },
              'filter': false,
              'thumbnail': null,
              'name': 'Wheat Raw Material',
              'processes': [],
              'item_nr': '611111112',
              'dummy': false,
              'description': null,
              'id': 309,
              'completeness': '0.86',
              'product_type': {
                'id': 20,
                'name': 'Agricultural Raw Material'
              },
              'created_on': '2018-03-29T07:28:24.574491Z',
              'modified_on': '2018-03-29T07:28:24.574564Z'
            },
            'db_id': 93530,
            'filter': false,
            'created': 1522821850487,
            'name': 'Wheat Raw Material',
            'parents_id': [
              93530
            ],
            'dummy': false
          },
          {
            'rdb_id': 308,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 168,
                'company': {
                  'id': 142,
                  'name': 'Supplier_12'
                },
                'name': 'Supplier facility 12'
              },
              'filter': false,
              'thumbnail': null,
              'name': 'Wheat Raw Material',
              'processes': [],
              'item_nr': '511111111',
              'dummy': false,
              'description': null,
              'id': 308,
              'completeness': '0.86',
              'product_type': {
                'id': 20,
                'name': 'Agricultural Raw Material'
              },
              'created_on': '2018-03-29T07:28:24.351173Z',
              'modified_on': '2018-03-29T07:28:24.351263Z'
            },
            'db_id': 93529,
            'filter': false,
            'created': 1522821850486,
            'name': 'Wheat Raw Material',
            'parents_id': [
              93529
            ],
            'dummy': false
          },
          {
            'rdb_id': 307,
            'details': {
              'facility': {
                'facility_type': {
                  'id': 10,
                  'name': 'Factory'
                },
                'id': 167,
                'company': {
                  'id': 141,
                  'name': 'Supplier_11'
                },
                'name': 'Supplier facility 11'
              },
              'filter': false,
              'thumbnail': null,
              'name': 'Wheat Raw Material',
              'processes': [],
              'item_nr': '41111111',
              'dummy': false,
              'description': null,
              'id': 307,
              'completeness': '0.86',
              'product_type': {
                'id': 20,
                'name': 'Agricultural Raw Material'
              },
              'created_on': '2018-03-29T07:28:24.014782Z',
              'modified_on': '2018-03-29T07:28:24.014844Z'
            },
            'db_id': 93528,
            'filter': false,
            'created': 1522821850484,
            'name': 'Wheat Raw Material',
            'parents_id': [
              93528
            ],
            'dummy': false
          }
        ],
        product: {
          nodes: [
            {
              filter: false,
              created: 1522502796557,
              name: 'Omega Power (Packed)',
              unknown: false,
              rdb_id: 296,
              json: {id: 296, name: 'Omega Power (Packed)', description: null, item_nr: '123456', product_type: {id: 19, name: 'Agricultural Product'}, thumbnail: '/backend/static/media/CACHE/images/attachments/img/4E5tyWYSBy/a5162eb92c645d31f6ae236f5e813e8a.png', created_on: '2018-03-29T07:28:20.938305Z', modified_on: '2018-03-29T07:28:20.938341Z', facility: {id: 152, name: 'Better chemicals warehouse', facility_type: {id: 11, name: 'Warehouse'}, company: {id: 126, name: 'Better Chemicals'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              rdb_id: 294,
              json: {id: 294, parent_product: 296, name: 'Omega Powder', child_products: [{company: 'Supplier_0', name: 'Omega Power (Powder)', id: 297}], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Omega Powder',
              created: 1522502797198,
              unknown: false
            },
            {
              rdb_id: 295,
              json: {id: 295, parent_product: 296, name: 'Package', child_products: [], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Package',
              created: 1522502797199,
              unknown: false
            },
            {
              filter: false,
              created: 1522502796558,
              name: 'Omega Power (Powder)',
              unknown: false,
              rdb_id: 297,
              json: {id: 297, name: 'Omega Power (Powder)', description: null, item_nr: '32345678', product_type: {id: 19, name: 'Agricultural Product'}, thumbnail: null, created_on: '2018-03-29T07:28:21.271047Z', modified_on: '2018-03-29T07:28:21.271105Z', facility: {id: 156, name: 'Supplier facility 0', facility_type: {id: 10, name: 'Factory'}, company: {id: 130, name: 'Supplier_0'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              rdb_id: 307,
              json: {id: 307, parent_product: 297, name: 'Methionine', child_products: [], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Methionine',
              created: 1522502797218,
              unknown: false
            },
            {
              rdb_id: 308,
              json: {id: 308, parent_product: 297, name: 'Tryptophan', child_products: [], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Tryptophan',
              created: 1522502797220,
              unknown: false
            },
            {
              rdb_id: 305,
              json: {id: 305, parent_product: 297, name: 'Sunflower oil', child_products: [], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Sunflower oil',
              created: 1522502797213,
              unknown: false
            },
            {
              rdb_id: 306,
              json: {id: 306, parent_product: 297, name: 'Lysine', child_products: [], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Lysine',
              created: 1522502797215,
              unknown: false
            },
            {
              rdb_id: 309,
              json: {id: 309, parent_product: 297, name: 'Threonine', child_products: [], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Threonine',
              created: 1522502797241,
              unknown: false
            },
            {
              rdb_id: 300,
              json: {id: 300, parent_product: 297, name: 'Corn gluten', child_products: [], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Corn gluten',
              created: 1522502797206,
              unknown: false
            },
            {
              rdb_id: 299,
              json: {id: 299, parent_product: 297, name: 'Synthetical oil', child_products: [{company: 'Supplier_4', name: 'Syn Omega', id: 301}], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Synthetical oil',
              created: 1522502797206,
              unknown: false
            },
            {
              rdb_id: 303,
              json: {id: 303, parent_product: 297, name: 'Rape Oil', child_products: [], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Rape Oil',
              created: 1522502797208,
              unknown: false
            },
            {
              rdb_id: 304,
              json: {id: 304, parent_product: 297, name: 'Peas', child_products: [], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Peas',
              created: 1522502797209,
              unknown: false
            },
            {
              rdb_id: 301,
              json: {id: 301, parent_product: 297, name: 'Soy', child_products: [], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Soy',
              created: 1522502797207,
              unknown: false
            },
            {
              rdb_id: 302,
              json: {id: 302, parent_product: 297, name: 'Lecithin', child_products: [], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Lecithin',
              created: 1522502797208,
              unknown: false
            },
            {
              rdb_id: 297,
              json: {id: 297, parent_product: 297, name: 'Vitamin Mix', child_products: [{company: 'Supplier_2', name: 'Vitamin Powder', id: 299}], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Vitamin Mix',
              created: 1522502797201,
              unknown: false
            },
            {
              rdb_id: 298,
              json: {id: 298, parent_product: 297, name: 'Soy Protein', child_products: [{company: 'Syn Omega', name: 'Gold Star Soy', id: 300}], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Soy Protein',
              created: 1522502797203,
              unknown: false
            },
            {
              filter: false,
              created: 1522502796575,
              name: 'Syn Omega',
              unknown: false,
              rdb_id: 301,
              json: {id: 301, name: 'Syn Omega', description: null, item_nr: '234562343', product_type: {id: 19, name: 'Agricultural Product'}, thumbnail: '/backend/static/media/CACHE/images/attachments/img/HTmGe4w3MR/54567816453d7ead15f6287769f75af3.png', created_on: '2018-03-29T07:28:22.375040Z', modified_on: '2018-03-29T07:28:22.375086Z', facility: {id: 160, name: 'Supplier facility 4', facility_type: {id: 10, name: 'Factory'}, company: {id: 134, name: 'Supplier_4'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796572,
              name: 'Vitamin Powder',
              unknown: false,
              rdb_id: 299,
              json: {id: 299, name: 'Vitamin Powder', description: null, item_nr: '224352678', product_type: {id: 19, name: 'Agricultural Product'}, thumbnail: null, created_on: '2018-03-29T07:28:21.817090Z', modified_on: '2018-03-29T07:28:21.817205Z', facility: {id: 158, name: 'Supplier facility 2', facility_type: {id: 10, name: 'Factory'}, company: {id: 132, name: 'Supplier_2'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796573,
              name: 'Gold Star Soy',
              unknown: false,
              rdb_id: 300,
              json: {id: 300, name: 'Gold Star Soy', description: null, item_nr: 'AA84647883YZ', product_type: {id: 19, name: 'Agricultural Product'}, thumbnail: '/backend/static/media/CACHE/images/attachments/img/YhQq44jpQw/a51846abad99a206a344e21bc61362cd.png', created_on: '2018-03-29T07:28:22.021702Z', modified_on: '2018-03-29T07:28:22.021737Z', facility: {id: 153, name: 'Soy Factory', facility_type: {id: 10, name: 'Factory'}, company: {id: 127, name: 'Syn Omega'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              rdb_id: 313,
              json: {id: 313, parent_product: 301, name: 'Potassium', child_products: [{company: 'Supplier_8', name: 'Potassium', id: 305}], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Potassium',
              created: 1522502797244,
              unknown: false
            },
            {
              rdb_id: 312,
              json: {id: 312, parent_product: 301, name: 'Sugar', child_products: [{company: 'Supplier_6', name: 'Agri Sweet', id: 303}], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Sugar',
              created: 1522502797243,
              unknown: false
            },
            {
              rdb_id: 315,
              json: {id: 315, parent_product: 301, name: 'Sulphuric Acid', child_products: [], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Sulphuric Acid',
              created: 1522502797245,
              unknown: false
            },
            {
              rdb_id: 314,
              json: {id: 314, parent_product: 301, name: 'Sodium Sulphat', child_products: [], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Sodium Sulphat',
              created: 1522502797245,
              unknown: false
            },
            {
              rdb_id: 296,
              json: {id: 296, parent_product: 301, name: 'Wheat Gluten Packed', child_products: [{company: 'Supplier_1', name: 'Wheat (Packed)', id: 298}], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Wheat Gluten Packed',
              created: 1522502797200,
              unknown: false
            },
            {
              rdb_id: 311,
              json: {id: 311, parent_product: 300, name: 'Soy', child_products: [], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Soy',
              created: 1522502797243,
              unknown: false
            },
            {
              filter: false,
              created: 1522502796583,
              name: 'Potassium',
              unknown: false,
              rdb_id: 305,
              json: {id: 305, name: 'Potassium', description: null, item_nr: '3234562343', product_type: {id: 19, name: 'Agricultural Product'}, thumbnail: null, created_on: '2018-03-29T07:28:23.453186Z', modified_on: '2018-03-29T07:28:23.453220Z', facility: {id: 164, name: 'Supplier facility 8', facility_type: {id: 10, name: 'Factory'}, company: {id: 138, name: 'Supplier_8'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796577,
              name: 'Agri Sweet',
              unknown: false,
              rdb_id: 303,
              json: {id: 303, name: 'Agri Sweet', description: null, item_nr: '32347773', product_type: {id: 19, name: 'Agricultural Product'}, thumbnail: null, created_on: '2018-03-29T07:28:22.943309Z', modified_on: '2018-03-29T07:28:22.943347Z', facility: {id: 162, name: 'Supplier facility 6', facility_type: {id: 10, name: 'Factory'}, company: {id: 136, name: 'Supplier_6'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796563,
              name: 'Wheat (Packed)',
              unknown: false,
              rdb_id: 298,
              json: {id: 298, name: 'Wheat (Packed)', description: null, item_nr: '232345678', product_type: {id: 19, name: 'Agricultural Product'}, thumbnail: null, created_on: '2018-03-29T07:28:21.577781Z', modified_on: '2018-03-29T07:28:21.577834Z', facility: {id: 157, name: 'Supplier facility 1', facility_type: {id: 10, name: 'Factory'}, company: {id: 131, name: 'Supplier_1'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              rdb_id: 317,
              json: {id: 317, parent_product: 303, name: 'Sugar Cane', child_products: [{company: 'Supplier_15', name: 'Sugar Cane', id: 311}, {company: 'Supplier_16', name: 'Sugar Cane', id: 312}, {company: 'Supplier_17', name: 'Sugar Cane', id: 313}, {company: 'Supplier_18', name: 'Sugar Cane', id: 314}, {company: 'Supplier_19', name: 'Sugar Cane', id: 315}, {company: 'Supplier_20', name: 'Sugar Cane', id: 316}, {company: 'Supplier_21', name: 'Sugar Cane', id: 317}, {company: 'Supplier_22', name: 'Sugar Cane', id: 318}, {company: 'Supplier_23', name: 'Sugar Cane', id: 319}], unit: 'kg', quantity: 0.0, product_type: {id: 21, name: 'Raw Sugar Cane'}, reference_unit: 'kg'},
              name: 'Sugar Cane',
              created: 1522502797261,
              unknown: false
            },
            {
              rdb_id: 310,
              json: {id: 310, parent_product: 298, name: 'Wheat', child_products: [{company: 'Supplier_5', name: 'Wheat (from Storage)', id: 302}], unit: 'kg', quantity: 0.0, product_type: {id: 19, name: 'Agricultural Product'}, reference_unit: 'kg'},
              name: 'Wheat',
              created: 1522502797242,
              unknown: false
            },
            {
              filter: false,
              created: 1522502796597,
              name: 'Sugar Cane',
              unknown: false,
              rdb_id: 314,
              json: {id: 314, name: 'Sugar Cane', description: null, item_nr: '4245245243', product_type: {id: 21, name: 'Raw Sugar Cane'}, thumbnail: '/backend/static/media/CACHE/images/attachments/img/tPL6Den7vQ/57b1298d6dbd3558b6264fec54c4628e.png', created_on: '2018-03-29T07:28:30.664969Z', modified_on: '2018-03-29T07:28:40.196891Z', facility: {id: 174, name: 'A Sugar cane farmer 18', facility_type: {id: 10, name: 'Factory'}, company: {id: 148, name: 'Supplier_18'}}, completeness: '0.60', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796607,
              name: 'Sugar Cane',
              unknown: false,
              rdb_id: 313,
              json: {id: 313, name: 'Sugar Cane', description: null, item_nr: '4245245242', product_type: {id: 21, name: 'Raw Sugar Cane'}, thumbnail: '/backend/static/media/CACHE/images/attachments/img/25YhkhQbRR/c40dc88c1968ee421b0969b250393577.png', created_on: '2018-03-29T07:28:28.933804Z', modified_on: '2018-03-29T07:28:39.979724Z', facility: {id: 173, name: 'A Sugar cane farmer 17', facility_type: {id: 10, name: 'Factory'}, company: {id: 147, name: 'Supplier_17'}}, completeness: '0.60', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796592,
              name: 'Sugar Cane',
              unknown: false,
              rdb_id: 312,
              json: {id: 312, name: 'Sugar Cane', description: null, item_nr: '4245245241', product_type: {id: 21, name: 'Raw Sugar Cane'}, thumbnail: '/backend/static/media/CACHE/images/attachments/img/J2B7karxuQ/5f81fd51b7399c6cecfb34e796026df5.png', created_on: '2018-03-29T07:28:27.244530Z', modified_on: '2018-03-29T07:28:27.244564Z', facility: {id: 172, name: 'A Sugar cane farmer 16', facility_type: {id: 10, name: 'Factory'}, company: {id: 146, name: 'Supplier_16'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796591,
              name: 'Sugar Cane',
              unknown: false,
              rdb_id: 311,
              json: {id: 311, name: 'Sugar Cane', description: null, item_nr: '4245245240', product_type: {id: 21, name: 'Raw Sugar Cane'}, thumbnail: '/backend/static/media/CACHE/images/attachments/img/JhvhTSNrDL/3daf624ea3a1d32d866ff492c329a34b.png', created_on: '2018-03-29T07:28:25.365579Z', modified_on: '2018-03-29T07:28:25.365639Z', facility: {id: 171, name: 'A Sugar cane farmer 15', facility_type: {id: 10, name: 'Factory'}, company: {id: 145, name: 'Supplier_15'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796606,
              name: 'Sugar Cane',
              unknown: false,
              rdb_id: 319,
              json: {id: 319, name: 'Sugar Cane', description: null, item_nr: '4245245248', product_type: {id: 21, name: 'Raw Sugar Cane'}, thumbnail: '/backend/static/media/CACHE/images/attachments/img/4nxbxt93UP/4451d0c0b77b1ab8fe111c45f73ac391.png', created_on: '2018-03-29T07:28:38.503661Z', modified_on: '2018-03-29T07:28:38.503694Z', facility: {id: 179, name: 'A Sugar cane farmer 23', facility_type: {id: 10, name: 'Factory'}, company: {id: 153, name: 'Supplier_23'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796598,
              name: 'Sugar Cane',
              unknown: false,
              rdb_id: 315,
              json: {id: 315, name: 'Sugar Cane', description: null, item_nr: '4245245244', product_type: {id: 21, name: 'Raw Sugar Cane'}, thumbnail: '/backend/static/media/CACHE/images/attachments/img/mGe5rqjMkk/f687ae7ec74d9e183d4596c7b81af8bb.png', created_on: '2018-03-29T07:28:32.626387Z', modified_on: '2018-03-29T07:28:40.463562Z', facility: {id: 175, name: 'A Sugar cane farmer 19', facility_type: {id: 10, name: 'Factory'}, company: {id: 149, name: 'Supplier_19'}}, completeness: '0.60', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796594,
              name: 'Sugar Cane',
              unknown: false,
              rdb_id: 316,
              json: {id: 316, name: 'Sugar Cane', description: null, item_nr: '4245245245', product_type: {id: 21, name: 'Raw Sugar Cane'}, thumbnail: '/backend/static/media/CACHE/images/attachments/img/6czeKwXw2N/9b3512e419461abd4366ed82c52894ee.png', created_on: '2018-03-29T07:28:34.143079Z', modified_on: '2018-03-29T07:28:34.143111Z', facility: {id: 176, name: 'A Sugar cane farmer 20', facility_type: {id: 10, name: 'Factory'}, company: {id: 150, name: 'Supplier_20'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796595,
              name: 'Sugar Cane',
              unknown: false,
              rdb_id: 317,
              json: {id: 317, name: 'Sugar Cane', description: null, item_nr: '4245245246', product_type: {id: 21, name: 'Raw Sugar Cane'}, thumbnail: '/backend/static/media/CACHE/images/attachments/img/YSfgYVVjnp/f48e80cb27d0b25194b6ee4f6e50017e.png', created_on: '2018-03-29T07:28:35.546854Z', modified_on: '2018-03-29T07:28:35.546888Z', facility: {id: 177, name: 'A Sugar cane farmer 21', facility_type: {id: 10, name: 'Factory'}, company: {id: 151, name: 'Supplier_21'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796601,
              name: 'Sugar Cane',
              unknown: false,
              rdb_id: 318,
              json: {id: 318, name: 'Sugar Cane', description: null, item_nr: '4245245247', product_type: {id: 21, name: 'Raw Sugar Cane'}, thumbnail: '/backend/static/media/CACHE/images/attachments/img/agnquF99bx/e561719cea545ae2a0bf9bfbd6292c3e.png', created_on: '2018-03-29T07:28:36.959576Z', modified_on: '2018-03-29T07:28:36.959608Z', facility: {id: 178, name: 'A Sugar cane farmer 22', facility_type: {id: 10, name: 'Factory'}, company: {id: 152, name: 'Supplier_22'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796576,
              name: 'Wheat (from Storage)',
              unknown: false,
              rdb_id: 302,
              json: {id: 302, name: 'Wheat (from Storage)', description: null, item_nr: '3234562343', product_type: {id: 19, name: 'Agricultural Product'}, thumbnail: null, created_on: '2018-03-29T07:28:22.706689Z', modified_on: '2018-03-29T07:28:22.706724Z', facility: {id: 161, name: 'Supplier facility 5', facility_type: {id: 10, name: 'Factory'}, company: {id: 135, name: 'Supplier_5'}}, completeness: '0.80', processes: [], filter: false, unknown: false}
            },
            {
              rdb_id: 316,
              json: {id: 316, parent_product: 302, name: 'Wheat Raw Material', child_products: [{company: 'Supplier_11', name: 'Wheat Raw Material', id: 307}, {company: 'Supplier_12', name: 'Wheat Raw Material', id: 308}, {company: 'Supplier_13', name: 'Wheat Raw Material', id: 309}, {company: 'Supplier_14', name: 'Wheat Raw Material', id: 310}], unit: 'kg', quantity: 0.0, product_type: {id: 20, name: 'Agricultural Raw Material'}, reference_unit: 'kg'},
              name: 'Wheat Raw Material',
              created: 1522502797250,
              unknown: false
            },
            {
              filter: false,
              created: 1522502796589,
              name: 'Wheat Raw Material',
              unknown: false,
              rdb_id: 310,
              json: {id: 310, name: 'Wheat Raw Material', description: null, item_nr: '711111113', product_type: {id: 20, name: 'Agricultural Raw Material'}, thumbnail: null, created_on: '2018-03-29T07:28:24.914478Z', modified_on: '2018-03-29T07:28:24.914512Z', facility: {id: 170, name: 'Supplier facility 14', facility_type: {id: 10, name: 'Factory'}, company: {id: 144, name: 'Supplier_14'}}, completeness: '0.86', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796588,
              name: 'Wheat Raw Material',
              unknown: false,
              rdb_id: 309,
              json: {id: 309, name: 'Wheat Raw Material', description: null, item_nr: '611111112', product_type: {id: 20, name: 'Agricultural Raw Material'}, thumbnail: null, created_on: '2018-03-29T07:28:24.574491Z', modified_on: '2018-03-29T07:28:24.574564Z', facility: {id: 169, name: 'Supplier facility 13', facility_type: {id: 10, name: 'Factory'}, company: {id: 143, name: 'Supplier_13'}}, completeness: '0.86', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796587,
              name: 'Wheat Raw Material',
              unknown: false,
              rdb_id: 308,
              json: {id: 308, name: 'Wheat Raw Material', description: null, item_nr: '511111111', product_type: {id: 20, name: 'Agricultural Raw Material'}, thumbnail: null, created_on: '2018-03-29T07:28:24.351173Z', modified_on: '2018-03-29T07:28:24.351263Z', facility: {id: 168, name: 'Supplier facility 12', facility_type: {id: 10, name: 'Factory'}, company: {id: 142, name: 'Supplier_12'}}, completeness: '0.86', processes: [], filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502796586,
              name: 'Wheat Raw Material',
              unknown: false,
              rdb_id: 307,
              json: {id: 307, name: 'Wheat Raw Material', description: null, item_nr: '41111111', product_type: {id: 20, name: 'Agricultural Raw Material'}, thumbnail: null, created_on: '2018-03-29T07:28:24.014782Z', modified_on: '2018-03-29T07:28:24.014844Z', facility: {id: 167, name: 'Supplier facility 11', facility_type: {id: 10, name: 'Factory'}, company: {id: 141, name: 'Supplier_11'}}, completeness: '0.86', processes: [], filter: false, unknown: false}
            }
          ],
          relationships: [
            {
              type: 'CONSISTS_OF',
              end: 91277,
              start: 91021,
              id: 90136
            },
            {
              type: 'CONSISTS_OF',
              end: 91278,
              start: 91021,
              id: 90138
            },
            {
              type: 'HAS_SOURCES',
              end: 91022,
              start: 91277,
              id: 90137
            },
            {
              type: 'CONSISTS_OF',
              end: 91290,
              start: 91022,
              id: 90154
            },
            {
              type: 'CONSISTS_OF',
              end: 91291,
              start: 91022,
              id: 90155
            },
            {
              type: 'CONSISTS_OF',
              end: 91288,
              start: 91022,
              id: 90152
            },
            {
              type: 'CONSISTS_OF',
              end: 91289,
              start: 91022,
              id: 90153
            },
            {
              type: 'CONSISTS_OF',
              end: 91292,
              start: 91022,
              id: 90156
            },
            {
              type: 'CONSISTS_OF',
              end: 91283,
              start: 91022,
              id: 90147
            },
            {
              type: 'CONSISTS_OF',
              end: 91282,
              start: 91022,
              id: 90145
            },
            {
              type: 'CONSISTS_OF',
              end: 91286,
              start: 91022,
              id: 90150
            },
            {
              type: 'CONSISTS_OF',
              end: 91287,
              start: 91022,
              id: 90151
            },
            {
              type: 'CONSISTS_OF',
              end: 91284,
              start: 91022,
              id: 90148
            },
            {
              type: 'CONSISTS_OF',
              end: 91285,
              start: 91022,
              id: 90149
            },
            {
              type: 'CONSISTS_OF',
              end: 91280,
              start: 91022,
              id: 90141
            },
            {
              type: 'CONSISTS_OF',
              end: 91281,
              start: 91022,
              id: 90143
            },
            {
              type: 'HAS_SOURCES',
              end: 91026,
              start: 91282,
              id: 90146
            },
            {
              type: 'HAS_SOURCES',
              end: 91024,
              start: 91280,
              id: 90142
            },
            {
              type: 'HAS_SOURCES',
              end: 91025,
              start: 91281,
              id: 90144
            },
            {
              type: 'CONSISTS_OF',
              end: 91296,
              start: 91026,
              id: 90162
            },
            {
              type: 'CONSISTS_OF',
              end: 91295,
              start: 91026,
              id: 90160
            },
            {
              type: 'CONSISTS_OF',
              end: 91298,
              start: 91026,
              id: 90165
            },
            {
              type: 'CONSISTS_OF',
              end: 91297,
              start: 91026,
              id: 90164
            },
            {
              type: 'CONSISTS_OF',
              end: 91279,
              start: 91026,
              id: 90139
            },
            {
              type: 'CONSISTS_OF',
              end: 91294,
              start: 91025,
              id: 90159
            },
            {
              type: 'HAS_SOURCES',
              end: 91030,
              start: 91296,
              id: 90163
            },
            {
              type: 'HAS_SOURCES',
              end: 91028,
              start: 91295,
              id: 90161
            },
            {
              type: 'HAS_SOURCES',
              end: 91023,
              start: 91279,
              id: 90140
            },
            {
              type: 'CONSISTS_OF',
              end: 91300,
              start: 91028,
              id: 90171
            },
            {
              type: 'CONSISTS_OF',
              end: 91293,
              start: 91023,
              id: 90157
            },
            {
              type: 'HAS_SOURCES',
              end: 91040,
              start: 91300,
              id: 90175
            },
            {
              type: 'HAS_SOURCES',
              end: 91044,
              start: 91300,
              id: 90174
            },
            {
              type: 'HAS_SOURCES',
              end: 91037,
              start: 91300,
              id: 90173
            },
            {
              type: 'HAS_SOURCES',
              end: 91036,
              start: 91300,
              id: 90172
            },
            {
              type: 'HAS_SOURCES',
              end: 91043,
              start: 91300,
              id: 90180
            },
            {
              type: 'HAS_SOURCES',
              end: 91041,
              start: 91300,
              id: 90176
            },
            {
              type: 'HAS_SOURCES',
              end: 91038,
              start: 91300,
              id: 90177
            },
            {
              type: 'HAS_SOURCES',
              end: 91039,
              start: 91300,
              id: 90178
            },
            {
              type: 'HAS_SOURCES',
              end: 91042,
              start: 91300,
              id: 90179
            },
            {
              type: 'HAS_SOURCES',
              end: 91027,
              start: 91293,
              id: 90158
            },
            {
              type: 'CONSISTS_OF',
              end: 91299,
              start: 91027,
              id: 90166
            },
            {
              type: 'HAS_SOURCES',
              end: 91035,
              start: 91299,
              id: 90170
            },
            {
              type: 'HAS_SOURCES',
              end: 91034,
              start: 91299,
              id: 90169
            },
            {
              type: 'HAS_SOURCES',
              end: 91033,
              start: 91299,
              id: 90168
            },
            {
              type: 'HAS_SOURCES',
              end: 91032,
              start: 91299,
              id: 90167
            }
          ]
        },
        facility: {
          nodes: [
            {
              filter: false,
              created: 1522502797554,
              name: 'Better chemicals warehouse',
              unknown: false,
              db_id: 91413,
              rdb_id: 152,
              json: {id: 152, name: 'Better chemicals warehouse', company: {id: 126, name: 'Better Chemicals'}, address: {id: 296, city: 'Ludwigshafen', country: 'Germany', latitude: '47.819767800000001', longitude: '9.057743000000000', location_type: 'city'}, created_on: '2018-03-29T07:28:05.847913Z', modified_on: '2018-03-29T07:28:05.847954Z', facility_type: {id: 11, name: 'Warehouse'}, certificates: [], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: false, has_environment_cert: false, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797558,
              name: 'Supplier facility 0',
              unknown: false,
              db_id: 91417,
              rdb_id: 156,
              json: {id: 156, name: 'Supplier facility 0', company: {id: 130, name: 'Supplier_0'}, address: {id: 300, city: 'Beijing', country: 'China', latitude: '39.859152500000000', longitude: '116.386671199999995', location_type: 'street'}, created_on: '2018-03-29T07:28:14.067117Z', modified_on: '2018-03-29T07:28:14.067149Z', facility_type: {id: 10, name: 'Factory'}, certificates: [9, 21, 29, 53], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: true, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797563,
              name: 'Supplier facility 4',
              unknown: false,
              db_id: 91421,
              rdb_id: 160,
              json: {id: 160, name: 'Supplier facility 4', company: {id: 134, name: 'Supplier_4'}, address: {id: 304, city: 'H\\u00e0 N\\u1ed9i', country: 'Viet Nam', latitude: '21.028285199999999', longitude: '105.838394600000001', location_type: 'street'}, created_on: '2018-03-29T07:28:15.237797Z', modified_on: '2018-03-29T07:28:15.237837Z', facility_type: {id: 10, name: 'Factory'}, certificates: [11, 43], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: true, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797561,
              name: 'Supplier facility 2',
              unknown: false,
              db_id: 91419,
              rdb_id: 158,
              json: {id: 158, name: 'Supplier facility 2', company: {id: 132, name: 'Supplier_2'}, address: {id: 302, city: 'Khet Watthana', country: 'Thailand', latitude: '13.744870700000000', longitude: '100.552942799999997', location_type: 'street'}, created_on: '2018-03-29T07:28:14.660502Z', modified_on: '2018-03-29T07:28:14.660542Z', facility_type: {id: 10, name: 'Factory'}, certificates: [], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: false, has_environment_cert: false, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797555,
              name: 'Soy Factory',
              unknown: false,
              db_id: 91414,
              rdb_id: 153,
              json: {id: 153, name: 'Soy Factory', company: {id: 127, name: 'Syn Omega'}, address: {id: 297, city: 'Qingpu', country: 'China', latitude: '31.271404499999999', longitude: '121.176600100000002', location_type: 'street'}, created_on: '2018-03-29T07:28:06.736993Z', modified_on: '2018-03-29T07:28:06.737031Z', facility_type: {id: 10, name: 'Factory'}, certificates: [], is_subcontractor: false, subcontractors: [{name: 'Subcontractor 1 facility', id: 154}, {name: 'Subcontractor 2 facility', id: 155}], subcontractor_buyers: [], completeness: '0.93', has_social_cert: false, has_environment_cert: false, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797581,
              name: 'Supplier facility 8',
              unknown: false,
              db_id: 91425,
              rdb_id: 164,
              json: {id: 164, name: 'Supplier facility 8', company: {id: 138, name: 'Supplier_8'}, address: {id: 308, city: 'Kualalumpur', country: 'Malaysia', latitude: '3.143620100000000', longitude: '101.707478899999998', location_type: 'street'}, created_on: '2018-03-29T07:28:16.471486Z', modified_on: '2018-03-29T07:28:16.471526Z', facility_type: {id: 10, name: 'Factory'}, certificates: [45, 65], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: true, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797565,
              name: 'Supplier facility 6',
              unknown: false,
              db_id: 91423,
              rdb_id: 162,
              json: {id: 162, name: 'Supplier facility 6', company: {id: 136, name: 'Supplier_6'}, address: {id: 306, city: 'Kualalumpur', country: 'Malaysia', latitude: '3.143620100000000', longitude: '101.707478899999998', location_type: 'street'}, created_on: '2018-03-29T07:28:15.852841Z', modified_on: '2018-03-29T07:28:15.852880Z', facility_type: {id: 10, name: 'Factory'}, certificates: [31, 63], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: true, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797560,
              name: 'Supplier facility 1',
              unknown: false,
              db_id: 91418,
              rdb_id: 157,
              json: {id: 157, name: 'Supplier facility 1', company: {id: 131, name: 'Supplier_1'}, address: {id: 301, city: 'Mlolongo', country: 'Kenya', latitude: '-1.382109600000000', longitude: '36.938712199999998', location_type: 'street'}, created_on: '2018-03-29T07:28:14.395069Z', modified_on: '2018-03-29T07:28:14.395108Z', facility_type: {id: 10, name: 'Factory'}, certificates: [10, 22, 42, 54], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: true, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797606,
              name: 'A Sugar cane farmer 18',
              unknown: false,
              db_id: 91435,
              rdb_id: 174,
              json: {id: 174, name: 'A Sugar cane farmer 18', company: {id: 148, name: 'Supplier_18'}, address: {id: 318, city: 'Kualalumpur', country: 'Malaysia', latitude: '3.143620100000000', longitude: '101.707478899999998', location_type: 'street'}, created_on: '2018-03-29T07:28:19.168730Z', modified_on: '2018-03-29T07:28:19.168771Z', facility_type: {id: 10, name: 'Factory'}, certificates: [19, 52, 62, 70], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: true, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797604,
              name: 'A Sugar cane farmer 17',
              unknown: false,
              db_id: 91434,
              rdb_id: 173,
              json: {id: 173, name: 'A Sugar cane farmer 17', company: {id: 147, name: 'Supplier_17'}, address: {id: 317, city: 'Warszawa', country: 'Poland', latitude: '52.263771599999998', longitude: '21.059510800000002', location_type: 'street'}, created_on: '2018-03-29T07:28:18.864279Z', modified_on: '2018-03-29T07:28:18.864320Z', facility_type: {id: 10, name: 'Factory'}, certificates: [18, 40, 61, 69], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: true, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797602,
              name: 'A Sugar cane farmer 16',
              unknown: false,
              db_id: 91433,
              rdb_id: 172,
              json: {id: 172, name: 'A Sugar cane farmer 16', company: {id: 146, name: 'Supplier_16'}, address: {id: 316, city: 'Kualalumpur', country: 'Malaysia', latitude: '3.143620100000000', longitude: '101.707478899999998', location_type: 'street'}, created_on: '2018-03-29T07:28:18.581278Z', modified_on: '2018-03-29T07:28:18.581312Z', facility_type: {id: 10, name: 'Factory'}, certificates: [28, 39, 51, 68], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: true, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797601,
              name: 'A Sugar cane farmer 15',
              unknown: false,
              db_id: 91432,
              rdb_id: 171,
              json: {id: 171, name: 'A Sugar cane farmer 15', company: {id: 145, name: 'Supplier_15'}, address: {id: 315, city: 'Warszawa', country: 'Poland', latitude: '52.263771599999998', longitude: '21.059510800000002', location_type: 'street'}, created_on: '2018-03-29T07:28:18.325624Z', modified_on: '2018-03-29T07:28:18.325659Z', facility_type: {id: 10, name: 'Factory'}, certificates: [17, 27, 38], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: true, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797613,
              name: 'A Sugar cane farmer 23',
              unknown: false,
              db_id: 91440,
              rdb_id: 179,
              json: {id: 179, name: 'A Sugar cane farmer 23', company: {id: 153, name: 'Supplier_23'}, address: {id: 323, city: 'Kualalumpur', country: 'Malaysia', latitude: '3.143620100000000', longitude: '101.707478899999998', location_type: 'street'}, created_on: '2018-03-29T07:28:20.650044Z', modified_on: '2018-03-29T07:28:20.650078Z', facility_type: {id: 10, name: 'Factory'}, certificates: [], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: false, has_environment_cert: false, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797609,
              name: 'A Sugar cane farmer 19',
              unknown: false,
              db_id: 91436,
              rdb_id: 175,
              json: {id: 175, name: 'A Sugar cane farmer 19', company: {id: 149, name: 'Supplier_19'}, address: {id: 319, city: 'Kualalumpur', country: 'Malaysia', latitude: '3.143620100000000', longitude: '101.707478899999998', location_type: 'street'}, created_on: '2018-03-29T07:28:19.520906Z', modified_on: '2018-03-29T07:28:19.520939Z', facility_type: {id: 10, name: 'Factory'}, certificates: [71], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: false, has_environment_cert: true, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797610,
              name: 'A Sugar cane farmer 20',
              unknown: false,
              db_id: 91437,
              rdb_id: 176,
              json: {id: 176, name: 'A Sugar cane farmer 20', company: {id: 150, name: 'Supplier_20'}, address: {id: 320, city: 'Kualalumpur', country: 'Malaysia', latitude: '3.143620100000000', longitude: '101.707478899999998', location_type: 'street'}, created_on: '2018-03-29T07:28:19.799054Z', modified_on: '2018-03-29T07:28:19.799096Z', facility_type: {id: 10, name: 'Factory'}, certificates: [], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: false, has_environment_cert: false, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797611,
              name: 'A Sugar cane farmer 21',
              unknown: false,
              db_id: 91438,
              rdb_id: 177,
              json: {id: 177, name: 'A Sugar cane farmer 21', company: {id: 151, name: 'Supplier_21'}, address: {id: 321, city: 'Kualalumpur', country: 'Malaysia', latitude: '3.143620100000000', longitude: '101.707478899999998', location_type: 'street'}, created_on: '2018-03-29T07:28:20.088424Z', modified_on: '2018-03-29T07:28:20.088458Z', facility_type: {id: 10, name: 'Factory'}, certificates: [], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: false, has_environment_cert: false, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797612,
              name: 'A Sugar cane farmer 22',
              unknown: false,
              db_id: 91439,
              rdb_id: 178,
              json: {id: 178, name: 'A Sugar cane farmer 22', company: {id: 152, name: 'Supplier_22'}, address: {id: 322, city: 'Kualalumpur', country: 'Malaysia', latitude: '3.143620100000000', longitude: '101.707478899999998', location_type: 'street'}, created_on: '2018-03-29T07:28:20.398019Z', modified_on: '2018-03-29T07:28:20.398061Z', facility_type: {id: 10, name: 'Factory'}, certificates: [], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: false, has_environment_cert: false, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797564,
              name: 'Supplier facility 5',
              unknown: false,
              db_id: 91422,
              rdb_id: 161,
              json: {id: 161, name: 'Supplier facility 5', company: {id: 135, name: 'Supplier_5'}, address: {id: 305, city: 'Warszawa', country: 'Poland', latitude: '52.263771599999998', longitude: '21.059510800000002', location_type: 'street'}, created_on: '2018-03-29T07:28:15.580259Z', modified_on: '2018-03-29T07:28:15.580295Z', facility_type: {id: 10, name: 'Factory'}, certificates: [44], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: false, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797622,
              name: 'Circuit Board Factory',
              unknown: false,
              db_id: 91449,
              rdb_id: 187,
              json: {id: 187, name: 'Circuit Board Factory', company: {id: 127, name: 'Syn Omega'}, address: {id: 333, city: 'Pudao', country: 'China', latitude: null, longitude: null, location_type: null}, created_on: '2018-03-29T07:29:06.477276Z', modified_on: '2018-03-29T07:34:17.436078Z', facility_type: {id: 10, name: 'Factory'}, certificates: [], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.73', has_social_cert: false, has_environment_cert: false, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797562,
              name: 'Supplier facility 3',
              unknown: false,
              db_id: 91420,
              rdb_id: 159,
              json: {id: 159, name: 'Supplier facility 3', company: {id: 133, name: 'Supplier_3'}, address: {id: 303, city: 'Bangkok', country: 'Thailand', latitude: '13.744781500000000', longitude: '100.494097400000001', location_type: 'street'}, created_on: '2018-03-29T07:28:14.966952Z', modified_on: '2018-03-29T07:28:14.966994Z', facility_type: {id: 10, name: 'Factory'}, certificates: [30, 55], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: false, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797588,
              name: 'Supplier facility 14',
              unknown: false,
              db_id: 91431,
              rdb_id: 170,
              json: {id: 170, name: 'Supplier facility 14', company: {id: 144, name: 'Supplier_14'}, address: {id: 314, city: 'H\\u00e0 N\\u1ed9i', country: 'Viet Nam', latitude: '21.028285199999999', longitude: '105.838394600000001', location_type: 'street'}, created_on: '2018-03-29T07:28:18.071086Z', modified_on: '2018-03-29T07:28:18.071129Z', facility_type: {id: 10, name: 'Factory'}, certificates: [16, 26, 37, 50, 60], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: true, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797587,
              name: 'Supplier facility 13',
              unknown: false,
              db_id: 91430,
              rdb_id: 169,
              json: {id: 169, name: 'Supplier facility 13', company: {id: 143, name: 'Supplier_13'}, address: {id: 313, city: 'Bangkok', country: 'Thailand', latitude: '13.744781500000000', longitude: '100.494097400000001', location_type: 'street'}, created_on: '2018-03-29T07:28:17.781000Z', modified_on: '2018-03-29T07:28:17.781034Z', facility_type: {id: 10, name: 'Factory'}, certificates: [36], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: false, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797586,
              name: 'Supplier facility 12',
              unknown: false,
              db_id: 91429,
              rdb_id: 168,
              json: {id: 168, name: 'Supplier facility 12', company: {id: 142, name: 'Supplier_12'}, address: {id: 312, city: 'Khet Watthana', country: 'Thailand', latitude: '13.744870700000000', longitude: '100.552942799999997', location_type: 'street'}, created_on: '2018-03-29T07:28:17.507767Z', modified_on: '2018-03-29T07:28:17.507801Z', facility_type: {id: 10, name: 'Factory'}, certificates: [15, 35, 49, 59], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: true, has_quality_cert: false, filter: false, unknown: false}
            },
            {
              filter: false,
              created: 1522502797585,
              name: 'Supplier facility 11',
              unknown: false,
              db_id: 91428,
              rdb_id: 167,
              json: {id: 167, name: 'Supplier facility 11', company: {id: 141, name: 'Supplier_11'}, address: {id: 311, city: 'Mlolongo', country: 'Kenya', latitude: '-1.382109600000000', longitude: '36.938712199999998', location_type: 'street'}, created_on: '2018-03-29T07:28:17.260850Z', modified_on: '2018-03-29T07:28:17.260898Z', facility_type: {id: 10, name: 'Factory'}, certificates: [14, 25, 34, 48, 58, 67], is_subcontractor: false, subcontractors: [], subcontractor_buyers: [], completeness: '0.93', has_social_cert: true, has_environment_cert: true, has_quality_cert: false, filter: false, unknown: false}
            }
          ],
          relationships: [
            {
              type: 'SUPPLIES',
              end: 91417,
              start: 91413,
              id: 89742
            },
            {
              type: 'SUPPLIES',
              end: 91421,
              start: 91417,
              id: 89743
            },
            {
              type: 'SUPPLIES',
              end: 91419,
              start: 91417,
              id: 89743
            },
            {
              type: 'SUPPLIES',
              end: 91414,
              start: 91417,
              id: 89743
            },
            {
              type: 'SUPPLIES',
              end: 91425,
              start: 91421,
              id: 89747
            },
            {
              type: 'SUPPLIES',
              end: 91423,
              start: 91421,
              id: 89747
            },
            {
              type: 'SUPPLIES',
              end: 91418,
              start: 91421,
              id: 89747
            },
            {
              type: 'SUPPLIES',
              end: 91449,
              start: 91419,
              id: 89796
            },
            {
              type: 'SUPPLIES',
              end: 91421,
              start: 91419,
              id: 89796
            },
            {
              type: 'SUPPLIES',
              end: 91420,
              start: 91419,
              id: 89796
            },
            {
              type: 'SUPPLIES',
              end: 91435,
              start: 91423,
              id: 89749
            },
            {
              type: 'SUPPLIES',
              end: 91434,
              start: 91423,
              id: 89749
            },
            {
              type: 'SUPPLIES',
              end: 91433,
              start: 91423,
              id: 89749
            },
            {
              type: 'SUPPLIES',
              end: 91432,
              start: 91423,
              id: 89749
            },
            {
              type: 'SUPPLIES',
              end: 91440,
              start: 91423,
              id: 89749
            },
            {
              type: 'SUPPLIES',
              end: 91436,
              start: 91423,
              id: 89749
            },
            {
              type: 'SUPPLIES',
              end: 91437,
              start: 91423,
              id: 89749
            },
            {
              type: 'SUPPLIES',
              end: 91438,
              start: 91423,
              id: 89749
            },
            {
              type: 'SUPPLIES',
              end: 91439,
              start: 91423,
              id: 89749
            },
            {
              type: 'SUPPLIES',
              end: 91422,
              start: 91418,
              id: 89744
            },
            {
              type: 'SUPPLIES',
              end: 91422,
              start: 91418,
              id: 89800
            },
            {
              type: 'SUPPLIES',
              end: 91431,
              start: 91422,
              id: 89748
            },
            {
              type: 'SUPPLIES',
              end: 91430,
              start: 91422,
              id: 89748
            },
            {
              type: 'SUPPLIES',
              end: 91429,
              start: 91422,
              id: 89748
            },
            {
              type: 'SUPPLIES',
              end: 91428,
              start: 91422,
              id: 89748
            },
            {
              type: 'SUPPLIES',
              end: 91418,
              start: 91449,
              id: 89797
            },
            {
              type: 'SUPPLIES',
              end: 91423,
              start: 91449,
              id: 89797
            },
            {
              type: 'SUPPLIES',
              end: 91423,
              start: 91449,
              id: 89797
            }
          ]
        }
      }
    }
  },
  computed: {
    levels () {
      let levels = []
      for (let l in this.data) {
        levels.push(l)
      }
      return levels
    },
    selectedData () {
      return this.data[this.selected] || {}
    }
  }
}
</script>
