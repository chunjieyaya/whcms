// 弹性云主机
const ECS = () => import('@/views/CloudCompute/ECS/index.vue')
// 弹性云主机配置
const ECSConfig = () => import('@/views/CloudCompute/ECSConfig/index.vue')
// 弹性IP
const ElasticIP = () => import('@/views/CloudCompute/ElasticIP/index.vue')
// VPC
const VPC = () => import('@/views/CloudCompute/VPC/index.vue')
// 负载均衡
const CLB = () => import('@/views/CloudCompute/CLB/index.vue')
// 负载均衡
const NAT = () => import('@/views/CloudCompute/NAT/index.vue')

export default [
  {
    path: '/cloudcompute/ecs',
    name: 'ECS',
    component: ECS
  },
  {
    path: '/cloudcompute/ecsconfig',
    name: 'ECSConfig',
    component: ECSConfig,
    meta: { isDAS: true }
  },
  {
    path: '/cloudcompute/elasticIP',
    name: 'ElasticIP',
    component: ElasticIP
  },
  {
    path: '/cloudcompute/vpc',
    name: 'VPC',
    component: VPC
  },
  {
    path: '/cloudcompute/clb',
    name: 'CLB',
    component: CLB
  },
  {
    path: '/cloudcompute/nat',
    name: 'NAT',
    component: NAT
  },
]