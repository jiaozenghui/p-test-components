import { mapValues, without } from 'lodash-es'

declare interface CommonDefaultProps {
  //actions
  actionType: string
  url: string
  //size
  height: string
  width: string
  paddingLeft: string
  paddingRight: string
  paddingTop: string
  paddingBottom: string
  //border type
  borderStyle: string
  borderColor: string
  borderWidth: string
  borderRadius: string
  //shadow and opacity
  boxShadow: string
  opacity: string
  //position and x,y
  position: string
  left: string
  top: string
  right: string
}

export interface TextDefaultProps extends CommonDefaultProps {
  text: string
  fontSize: string
  fontFamily: string
  fontWeight: string
  fontStyle: string
  textDecoration: string
  lineHeight: string
  textAlign: string
  color: string
  backgroundColor: string
}

export interface ImageComponentProps extends CommonDefaultProps {
  imgSrc: string
}
export interface ShapeComponentProps extends CommonDefaultProps {
  backgroundColor: string
}

export const commonDefaultProps: CommonDefaultProps = {
  //actions
  actionType: '',
  url: '',
  //size
  height: '',
  width: '318px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  //border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  //shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: '1',
  //position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0'
}

export const textDefaultProps: TextDefaultProps = {
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps
}
export const imageDefaultProps: ImageComponentProps = {
  imgSrc: 'test.url',
  ...commonDefaultProps
}
export const transformToComponentProps = <T extends {}>(props: T) => {
  return mapValues(props, (item) => {
    return {
      type: String,
      default: item
    }
  })
}
export const shapeDefaultProps: ShapeComponentProps = {
  backgroundColor: '',
  ...commonDefaultProps
}
// this contains all default props for all the components
// useful for inserting new component into the store
export const componentsDefaultProps = {
  'l-text': {
    props: textDefaultProps
  },
  'l-image': {
    props: imageDefaultProps
  },
  'l-shape': {
    props: shapeDefaultProps
  }
}

// export const transformToComponentProps = (props: { [key: string]: any }, extraProps?: { [key: string]: any }) => {
//   const mapProps =  mapValues(props, (item) => {
//     return {
//       type: item.constructor,
//       default: item
//     }
//   })
//   if (extraProps) {
//     return { ...mapProps, ...extraProps }
//   } else {
//     return mapProps
//   }
// }

export const isEditingProp = {
  isEditing: {
    type: Boolean,
    default: false
  }
}
export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'actionType',
  'url',
  'text',
  'isEditing'
)

export const imageStylePropNames = without(
  Object.keys(imageDefaultProps),
  'actionType',
  'url',
  'imgSrc'
)
export const shapeStylePropNames = without(Object.keys(shapeDefaultProps), 'actionType', 'url')

export const defaultProps = transformToComponentProps(textDefaultProps)
export const defaultImageProps = transformToComponentProps(imageDefaultProps)
export const defaultShapeProps = transformToComponentProps(shapeDefaultProps)

export interface ComponentData {
  props: Partial<TextDefaultProps & ImageComponentProps & ShapeComponentProps>
  id: string
  name: string
  layerName?: string
  isHidden?: boolean
  isLocked?: boolean
}

export interface PageData {
  props: { [key: string]: any }
  setting: { [key: string]: any }
  id?: number
  title?: string
  desc?: string
  coverImg?: string
  uuid?: string
  latestPublishAt?: string
  updatedAt?: string
  isTemplate?: boolean
  isHot?: boolean
  isNew?: boolean
  author?: string
  status?: string
}
