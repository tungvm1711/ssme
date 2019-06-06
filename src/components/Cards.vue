<template>
  <md-layout md-gutter>
    <md-layout class="margin-bot-50" md-flex-xsmall="100" md-flex-medium="100" md-flex-large="100" md-flex-xlarge="100">
      <md-card class="card full-height">
        <google-map :entities="geoEntities"></google-map>
      </md-card>
    </md-layout>
    <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="25" md-flex-large="25" class="md-scrollbar"
               v-for="(entity,index) in cards" :key="entity.db_pedia.uri">
      <a :href="entity.db_pedia.uri">

        <md-card :class="index % 2 == 0 ? 'alt-card' : 'card'" md-with-hover>

          <md-card-area>
            <md-card-media>
              <div
                class="image-container"
                :style="styleImage(index)"
              ></div>
            </md-card-media>

            <md-card-header>
              <div class="md-title">{{entity.entity.text}}</div>
              <div class="md-subhead sub-head-wrapper">
                <div class="left">{{entity.entity.type}}</div>
                <div class="right">{{topEmotion[entity.entity.text][0].emotion}}
                  ({{topEmotion[entity.entity.text][0].value}})
                </div>
              </div>
            </md-card-header>

            <md-card-content class="content-container">
              {{entity.db_pedia.description}}
            </md-card-content>
          </md-card-area>

        </md-card>
      </a>
    </md-layout>
  </md-layout>
</template>

<script>
  import GoogleMap from './Map'

  export default {
    name: 'Cards',
    props: ['entities', 'geoEntities'],
    computed: {
      cards() {
        const hasDescription = e => e.db_pedia.description;
        const link = e => console.log(e);
        return this.entities.filter(hasDescription)
      },
      topEmotion() {
        const byScore = (a, b) => a.value < b.value;
        console.log(this.entities);

        return this.entities.reduce((o, e) => {
          const {emotion, text} = e.entity;
          const a = Object.keys(emotion)
            .map(k => ({value: emotion[k], emotion: k}))
            .sort(byScore);
          o[text] = a;
          return o
        }, {})
      },
    },
    methods: {
      styleImage(i) {
        return {
          height: '300px',
          'background-image': `url(${this.cards[i].db_pedia.thumb})`,
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position-x': 'center',
        }
      },
    },
    components: {
      GoogleMap,
    },
  }
</script>

<style scoped>
  .card {
    background-color: #e0e0e0 !important;
  }

  .md-layout {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
  }

  .alt-card {
    background-color: #37474f !important;
    color: rgb(240, 232, 232);
  }

  .content-container {
    max-height: 300px;
  }

  .md-theme-default a:not(.md-button) {
    color: inherit !important;
  }

  a:not(.md-button):not(.md-bottom-bar-item):hover {
    text-decoration: none !important;
  }

  .sub-head-wrapper {
    position: relative;
  }

  .md-card .md-card-content {
    min-height: 300px;
  }

  .right,
  .left {
    width: 50%;
    position: absolute;
  }

  .right {
    right: 0;
    text-align: right;
  }

  .left {
    left: 0;
  }

  .md-layout.md-scrollbar.md-flex-xsmall-100.md-flex-small-50.md-flex-medium-25.md-flex-large-25 {
    padding-right: 15px;
    margin-bottom: 30px;
  }

  .margin-bot-50 {
    margin-bottom: 50px;
  }

  .full-height {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    min-width: 240px;
  }
</style>
