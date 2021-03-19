<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img src="http://i.imgur.com/Qr71crq.jpg" class="user-img" />
            <h4>Eric Simons</h4>
            <p>
              Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda
              looks like Peeta from the Hunger Games
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp; Follow Eric Simons
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href="">My Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Favorited Articles</a>
              </li>
            </ul>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <a href=""><img src="http://i.imgur.com/Qr71crq.jpg"/></a>
              <div class="info">
                <a href="" class="author">Eric Simons</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 29
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>How to build webapps that scale</h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
            </a>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <a href=""><img src="http://i.imgur.com/N4VcUeJ.jpg"/></a>
              <div class="info">
                <a href="" class="author">Albert Pai</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 32
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>
                The song you won't ever stop singing. No matter how hard you
                try.
              </h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
              <ul class="tag-list">
                <li class="tag-default tag-pill tag-outline">Music</li>
                <li class="tag-default tag-pill tag-outline">Song</li>
              </ul>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import ArticlesList from 'src/components/ArticlesList.vue'
// import { useFollow } from 'src/composable/useFollowProfile'
// import { useProfile } from 'src/composable/useProfile'
// import { checkAuthorization, user } from 'src/store/user'
// import { computed, defineComponent } from 'vue'
// import { useRoute } from 'vue-router'

// export default defineComponent({
//   name: 'ProfilePage',
//   components: {
//     ArticlesList,
//   },
//   setup() {
//     const route = useRoute()
//     const username = computed<string>(() => route.params.username as string)

//     const { profile, updateProfile } = useProfile({ username })

//     const { followProcessGoing, toggleFollow } = useFollow({
//       following: computed<boolean>(() => profile.value?.following ?? false),
//       username,
//       onUpdate: (newProfileData: Profile) => updateProfile(newProfileData),
//     })

//     const showEdit = computed<boolean>(
//       () => checkAuthorization(user) && user.value.username === username.value
//     )
//     const showFollow = computed<boolean>(
//       () => user.value?.username !== username.value
//     )

//     return {
//       profile,
//       showEdit,
//       showFollow,
//       followProcessGoing,
//       toggleFollow,
//     }
//   },
// })
</script>

<style scoped>
.space {
  margin-right: 4px;
}
.align-left {
  text-align: left;
}
</style>
