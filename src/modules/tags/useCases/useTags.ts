import { reactive, readonly, toRefs } from '@vue/reactivity'
import { tagsService } from '../services'

const shareModel = reactive({
  tags: [''],
})

export function useTags() {
  const models = reactive({
    error: '',
  })

  async function fetchTags() {
    const ret = await tagsService.getAllTags()
    if (ret.isLeft()) {
      const error = ret.value
      models.error = error
    } else {
      const { tags } = ret.value.getValue()
      shareModel.tags = tags.filter((tag: string) =>
        String(tag).replace(/[\u200B-\u200D\uFEFF]/g, '')
      )
    }
  }

  return {
    models: { ...toRefs(readonly(models)), ...toRefs(readonly(shareModel)) },
    dispatch: {
      fetchTags,
    },
  }
}
