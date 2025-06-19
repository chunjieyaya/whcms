<script setup lang="ts">
import { Scene, HeatmapLayer, PointLayer, LayerPopup } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';

const props = defineProps({
	dataList: {
		type: Object,
		default: []
	}
})

let scene = new Scene({
	id: 'map',
	logoVisible: false,
	map: new GaodeMap({
		style: "blank",
		center: [0, 0],
		minZoom: 1.8,
		maxZoom: 1.8,
		dragEnable: false,
		doubleClickZoom: false,
		rotateEnable: false
	}),
});
onMounted(() => {
	// 创建scene对象
	scene = new Scene({
		id: 'map',
		logoVisible: false,
		map: new GaodeMap({
			style: "blank",
			center: [0, 0],
			minZoom: 1.8,
			maxZoom: 1.8,
			dragEnable: false,
			doubleClickZoom: false,
			rotateEnable: false
		}),
	});
	initMap()
})

watch(props.dataList, () => {
	removeLayers()
	setLayer(props.dataList)
})



// 初始化地图
let initMap = () => {
	scene.on('loaded', () => {
		fetch(
			`/world.json`
		)
			.then(res => res.json())
			.then(data => {
				// 基础点图层
				const layer = new HeatmapLayer({
					autoFit: true
				})
					.source(data, {
						transforms: [
							{
								type: 'hexagon',
								size: 5 * 100000
							}
						]
					})
					.shape('circle')
					.active(false)
					.color('#d3dae2')
					.style({
						coverage: 0.7,
						angle: 0,
					});
				setLayer(props.dataList)
				scene.addLayer(layer);
			});
	});
}

// 设置图层
let setLayer = (arr: any) => {
	for (let index = 0; index < arr.length; index++) {

		// 标记点图层
		const pointlayer = new PointLayer({
			zIndex: 10,
			name: `pointlayer${index}`
		}).source(arr[index].data, {
			parser: {
				type: 'json',
				x: 'x',
				y: 'y',
			}
		}).shape('circle').size(25).color(arr[index].color).animate(true);

		// 气泡图层
		const layerPopup = new LayerPopup({
			items: [
				{
					layer: pointlayer,
					fields: [
						{
							field: 'name',
							formatField: () => {
								return '名称'
							},
						},
						{
							field: 'value',
							formatField: () => {
								return '可用'
							},
						},
					],
				},
			],
			trigger: 'hover',
		});
		scene.addPopup(layerPopup);
		scene.addLayer(pointlayer);
	}
}

// 移除图层
let removeLayers = () => {
	let layers = scene.getLayers().filter(item => item.name.includes('pointlayer'))
	for (const layer of layers) {
		scene.removeLayer(layer)
	}
}







</script>

<template>
	<div style="height: 700px; justify-content: center;position: relative" id="map" />
</template>

<style>
.amap-layer {
	background-color: #f3f5f8;
}

#map {
	width: 100%;
}
</style>
