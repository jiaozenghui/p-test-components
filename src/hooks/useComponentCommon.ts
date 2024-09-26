import { pick } from 'lodash-es'
import {type TextDefaultProps, type ImageComponentProps } from '@/defaultProps'

const useComponentCommon = <T extends (TextDefaultProps | ImageComponentProps)>(
  props: Readonly<Partial<T>>,
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
