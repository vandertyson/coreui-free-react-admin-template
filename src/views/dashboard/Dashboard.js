import React, { useCallback } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
  MarkerType,
} from 'reactflow'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CContainer,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import CustomEdge from '../graph/CustomEdge'
import 'reactflow/dist/style.css'
const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: {
      label:
        <div>
          <b>CGW-abc-0212</b>
          <br />
          <span>10.0.112.1</span>
        </div>
    },
    position: { x: 250, y: 5 },
  },
  {
    id: '1a',
    type: 'input',
    data: {
      label:
        <div>
          <b>CGW-abc-3333</b>
          <br />
          <span>10.0.112.7</span>
        </div>
    },
    position: { x: 25, y: 5 },
  },
  {
    id: '2',
    // you can also pass a React component as a label
    data: {
      label:
        <div>
          <b>CHP-abc-0212</b>
          <br />
          <span>10.0.112.5</span>
        </div>
    },
    position: { x: 150, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: {
      label: <div>
        <b>ABM-1-0212</b>
        <br />
        <span>10.0.112.17</span>
      </div>
    },
    position: { x: 300, y: 250 },
  },
  {
    id: '4',
    type: 'output',
    data: {
      label: <div>
        <b>ABM-2-4scc</b>
        <br />
        <span>10.0.112.18</span>
      </div>
    },
    position: { x: 50, y: 250 },
  },
]

const initialEdges = [
  {
    id: 'e1a-2',
    source: '1a',
    target: '2',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
    },
    label: "200 TPS"
  },
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
    },
    label: "200 TPS"
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
    },
    label: "200 TPS"
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
    },
    label: "200 TPS"
  },
]

const edgeTypes = {
  custom: CustomEdge,
}
const Dashboard = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [])
  return (
    <>
      <div style={{ backgroundColor: "white", margin: "0" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          snapToGrid={true}
          edgeTypes={edgeTypes}
          fitView
          attributionPosition="top-right"
        >
          <MiniMap />
          <Controls />
          <Background />
          <div style={{ minHeight: "80vh" }}></div>
        </ReactFlow>
      </div>
    </>
  )
}

export default Dashboard
