import '@zeainc/zea-tree-view'
import { useRef } from 'react'

const ZeaTreeViewWrapper = () => {
  const ref = useRef()

  // @ts-ignore
  return <zea-tree-view ref={ref}></zea-tree-view>
}

export { ZeaTreeViewWrapper }
