<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { routerPush } from 'src/router'
// import { putProfile, PutProfileForm } from 'src/services/profile/putProfile'
// import { checkAuthorization, updateUser, user } from 'src/store/user'
// import { computed, defineComponent, onMounted, reactive } from 'vue'

// export default defineComponent({
//   name: 'SettingsPage',
//   setup() {
//     const form = reactive<PutProfileForm>({})

//     const onSubmit = async () => {
//       const filteredForm = Object.entries(form).reduce(
//         (a, [k, v]) => (v === null ? a : { ...a, [k]: v }),
//         {}
//       )
//       const userData = await putProfile(filteredForm)
//       updateUser(userData)
//       await routerPush('profile', { username: userData.username })
//     }

//     const onLogout = async () => {
//       updateUser(null)
//       await routerPush('global-feed')
//     }

//     onMounted(async () => {
//       if (!checkAuthorization(user)) return await routerPush('login')

//       form.image = user.value.image
//       form.username = user.value.username
//       form.bio = user.value.bio
//       form.email = user.value.email
//     })

//     const isButtonDisabled = computed(
//       () =>
//         form.image === user.value?.image &&
//         form.username === user.value?.username &&
//         form.bio === user.value?.bio &&
//         form.email === user.value?.email &&
//         !form.password
//     )

//     return {
//       form,
//       onSubmit,
//       isButtonDisabled,
//       onLogout,
//     }
//   },
// })
</script>
