import { pick } from 'lodash'
const useComponentCommon = (
  props: any,
  picks: string[]
) => {
  const styleProps: any = pick(props, picks)
  const handleClick = () => {
    if (props.actionType === 'url' && props.url  && !props.isEditing) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick
  }
}
export default useComponentCommon
