var wms_layers = [];

var format_MO_structure_0 = new ol.format.GeoJSON();
var features_MO_structure_0 = format_MO_structure_0.readFeatures(json_MO_structure_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MO_structure_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MO_structure_0.addFeatures(features_MO_structure_0);
var lyr_MO_structure_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MO_structure_0, 
                style: style_MO_structure_0,
                interactive: true,
                title: '<img src="styles/legend/MO_structure_0.png" /> MO_structure'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSattleiite_2 = new ol.layer.Tile({
            'title': 'Google Sattleiite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_highway_motorway_highway_motorway_link_3 = new ol.format.GeoJSON();
var features_highway_motorway_highway_motorway_link_3 = format_highway_motorway_highway_motorway_link_3.readFeatures(json_highway_motorway_highway_motorway_link_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_motorway_highway_motorway_link_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_motorway_highway_motorway_link_3.addFeatures(features_highway_motorway_highway_motorway_link_3);
var lyr_highway_motorway_highway_motorway_link_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_motorway_highway_motorway_link_3, 
                style: style_highway_motorway_highway_motorway_link_3,
                interactive: true,
                title: '<img src="styles/legend/highway_motorway_highway_motorway_link_3.png" /> highway_motorway_highway_motorway_link'
            });
var format_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4 = new ol.format.GeoJSON();
var features_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4 = format_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4.readFeatures(json_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4.addFeatures(features_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4);
var lyr_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4, 
                style: style_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4,
                interactive: true,
                title: '<img src="styles/legend/EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4.png" /> EPO_indep_mo_streets_reduced_EPSG 2817 NAD83 HARN Missouri West'
            });
var format_waterway_5 = new ol.format.GeoJSON();
var features_waterway_5 = format_waterway_5.readFeatures(json_waterway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterway_5.addFeatures(features_waterway_5);
var lyr_waterway_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterway_5, 
                style: style_waterway_5,
                interactive: true,
                title: '<img src="styles/legend/waterway_5.png" /> waterway'
            });
var format_waterway_6 = new ol.format.GeoJSON();
var features_waterway_6 = format_waterway_6.readFeatures(json_waterway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterway_6.addFeatures(features_waterway_6);
var lyr_waterway_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterway_6, 
                style: style_waterway_6,
                interactive: true,
                title: '<img src="styles/legend/waterway_6.png" /> waterway'
            });
var format_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7 = new ol.format.GeoJSON();
var features_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7 = format_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7.readFeatures(json_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7.addFeatures(features_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7);
var lyr_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7, 
                style: style_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7,
                interactive: true,
                title: '<img src="styles/legend/EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7.png" /> EPO_indep_mo_waterway_EPSG 2817 NAD83 HARN Missouri West'
            });
var format_waterway_river_8 = new ol.format.GeoJSON();
var features_waterway_river_8 = format_waterway_river_8.readFeatures(json_waterway_river_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterway_river_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterway_river_8.addFeatures(features_waterway_river_8);
var lyr_waterway_river_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterway_river_8, 
                style: style_waterway_river_8,
                interactive: true,
                title: '<img src="styles/legend/waterway_river_8.png" /> waterway_river'
            });
var format_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9 = new ol.format.GeoJSON();
var features_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9 = format_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9.readFeatures(json_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9.addFeatures(features_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9);
var lyr_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9, 
                style: style_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9,
                interactive: true,
                title: '<img src="styles/legend/EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9.png" /> EPO_indep_mo_waterway_river_EPSG 2817 NAD83 HARN Missouri West'
            });
var format_waterway_stream_10 = new ol.format.GeoJSON();
var features_waterway_stream_10 = format_waterway_stream_10.readFeatures(json_waterway_stream_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterway_stream_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterway_stream_10.addFeatures(features_waterway_stream_10);
var lyr_waterway_stream_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterway_stream_10, 
                style: style_waterway_stream_10,
                interactive: true,
                title: '<img src="styles/legend/waterway_stream_10.png" /> waterway_stream'
            });
var format_waterway_stream_11 = new ol.format.GeoJSON();
var features_waterway_stream_11 = format_waterway_stream_11.readFeatures(json_waterway_stream_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterway_stream_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterway_stream_11.addFeatures(features_waterway_stream_11);
var lyr_waterway_stream_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterway_stream_11, 
                style: style_waterway_stream_11,
                interactive: true,
                title: '<img src="styles/legend/waterway_stream_11.png" /> waterway_stream'
            });
var format_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12 = new ol.format.GeoJSON();
var features_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12 = format_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12.readFeatures(json_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12.addFeatures(features_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12);
var lyr_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12, 
                style: style_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12,
                interactive: true,
                title: '<img src="styles/legend/EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12.png" /> EPO_indep_mo_waterway_stream_EPSG 2817 NAD83 HARN Missouri West'
            });
var format_natural_tree_13 = new ol.format.GeoJSON();
var features_natural_tree_13 = format_natural_tree_13.readFeatures(json_natural_tree_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_natural_tree_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_natural_tree_13.addFeatures(features_natural_tree_13);
var lyr_natural_tree_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_natural_tree_13, 
                style: style_natural_tree_13,
                interactive: true,
                title: '<img src="styles/legend/natural_tree_13.png" /> natural_tree'
            });
var format_natural_tree_row_14 = new ol.format.GeoJSON();
var features_natural_tree_row_14 = format_natural_tree_row_14.readFeatures(json_natural_tree_row_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_natural_tree_row_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_natural_tree_row_14.addFeatures(features_natural_tree_row_14);
var lyr_natural_tree_row_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_natural_tree_row_14, 
                style: style_natural_tree_row_14,
                interactive: true,
                title: '<img src="styles/legend/natural_tree_row_14.png" /> natural_tree_row'
            });
var format_natural_tree_15 = new ol.format.GeoJSON();
var features_natural_tree_15 = format_natural_tree_15.readFeatures(json_natural_tree_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_natural_tree_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_natural_tree_15.addFeatures(features_natural_tree_15);
var lyr_natural_tree_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_natural_tree_15, 
                style: style_natural_tree_15,
                interactive: true,
                title: '<img src="styles/legend/natural_tree_15.png" /> natural_tree'
            });
var format_leisure_common_leisure_park_16 = new ol.format.GeoJSON();
var features_leisure_common_leisure_park_16 = format_leisure_common_leisure_park_16.readFeatures(json_leisure_common_leisure_park_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leisure_common_leisure_park_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leisure_common_leisure_park_16.addFeatures(features_leisure_common_leisure_park_16);
var lyr_leisure_common_leisure_park_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_leisure_common_leisure_park_16, 
                style: style_leisure_common_leisure_park_16,
                interactive: true,
                title: '<img src="styles/legend/leisure_common_leisure_park_16.png" /> leisure_common_leisure_park'
            });
var format_leisure_park_17 = new ol.format.GeoJSON();
var features_leisure_park_17 = format_leisure_park_17.readFeatures(json_leisure_park_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leisure_park_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leisure_park_17.addFeatures(features_leisure_park_17);
var lyr_leisure_park_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_leisure_park_17, 
                style: style_leisure_park_17,
                interactive: true,
                title: '<img src="styles/legend/leisure_park_17.png" /> leisure_park'
            });
var format_leisure_nature_reserve_18 = new ol.format.GeoJSON();
var features_leisure_nature_reserve_18 = format_leisure_nature_reserve_18.readFeatures(json_leisure_nature_reserve_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leisure_nature_reserve_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leisure_nature_reserve_18.addFeatures(features_leisure_nature_reserve_18);
var lyr_leisure_nature_reserve_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_leisure_nature_reserve_18, 
                style: style_leisure_nature_reserve_18,
                interactive: true,
                title: '<img src="styles/legend/leisure_nature_reserve_18.png" /> leisure_nature_reserve'
            });
var format_leisure_park_19 = new ol.format.GeoJSON();
var features_leisure_park_19 = format_leisure_park_19.readFeatures(json_leisure_park_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leisure_park_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leisure_park_19.addFeatures(features_leisure_park_19);
var lyr_leisure_park_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_leisure_park_19, 
                style: style_leisure_park_19,
                interactive: true,
                title: '<img src="styles/legend/leisure_park_19.png" /> leisure_park'
            });
var format_leisure_playground_20 = new ol.format.GeoJSON();
var features_leisure_playground_20 = format_leisure_playground_20.readFeatures(json_leisure_playground_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leisure_playground_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leisure_playground_20.addFeatures(features_leisure_playground_20);
var lyr_leisure_playground_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_leisure_playground_20, 
                style: style_leisure_playground_20,
                interactive: true,
                title: '<img src="styles/legend/leisure_playground_20.png" /> leisure_playground'
            });
var format_natural_tree_21 = new ol.format.GeoJSON();
var features_natural_tree_21 = format_natural_tree_21.readFeatures(json_natural_tree_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_natural_tree_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_natural_tree_21.addFeatures(features_natural_tree_21);
var lyr_natural_tree_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_natural_tree_21, 
                style: style_natural_tree_21,
                interactive: true,
                title: '<img src="styles/legend/natural_tree_21.png" /> natural_tree'
            });
var format_amenity_restaurant_22 = new ol.format.GeoJSON();
var features_amenity_restaurant_22 = format_amenity_restaurant_22.readFeatures(json_amenity_restaurant_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_restaurant_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_restaurant_22.addFeatures(features_amenity_restaurant_22);
var lyr_amenity_restaurant_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_amenity_restaurant_22, 
                style: style_amenity_restaurant_22,
                interactive: true,
                title: '<img src="styles/legend/amenity_restaurant_22.png" /> amenity_restaurant'
            });
var format_recycling_type_centre_23 = new ol.format.GeoJSON();
var features_recycling_type_centre_23 = format_recycling_type_centre_23.readFeatures(json_recycling_type_centre_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_recycling_type_centre_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_recycling_type_centre_23.addFeatures(features_recycling_type_centre_23);
var lyr_recycling_type_centre_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_recycling_type_centre_23, 
                style: style_recycling_type_centre_23,
                interactive: true,
                title: '<img src="styles/legend/recycling_type_centre_23.png" /> recycling_type_centre'
            });
var format_addrstreet_24 = new ol.format.GeoJSON();
var features_addrstreet_24 = format_addrstreet_24.readFeatures(json_addrstreet_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_addrstreet_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_addrstreet_24.addFeatures(features_addrstreet_24);
var lyr_addrstreet_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_addrstreet_24, 
                style: style_addrstreet_24,
                interactive: true,
                title: '<img src="styles/legend/addrstreet_24.png" /> addr:street'
            });
var format_building_industrial_25 = new ol.format.GeoJSON();
var features_building_industrial_25 = format_building_industrial_25.readFeatures(json_building_industrial_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_industrial_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_industrial_25.addFeatures(features_building_industrial_25);
var lyr_building_industrial_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_industrial_25, 
                style: style_building_industrial_25,
                interactive: true,
                title: '<img src="styles/legend/building_industrial_25.png" /> building_industrial'
            });
var format_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26 = new ol.format.GeoJSON();
var features_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26 = format_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26.readFeatures(json_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26.addFeatures(features_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26);
var lyr_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26, 
                style: style_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26,
                interactive: true,
                title: '<img src="styles/legend/EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26.png" /> EPO_indep_mo_building_industrial_EPSG 2817 NAD83 HARN Missouri West'
            });
var format_bridge_27 = new ol.format.GeoJSON();
var features_bridge_27 = format_bridge_27.readFeatures(json_bridge_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bridge_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bridge_27.addFeatures(features_bridge_27);
var lyr_bridge_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bridge_27, 
                style: style_bridge_27,
                interactive: true,
                title: '<img src="styles/legend/bridge_27.png" /> bridge'
            });
var format_building_house_amenity_house_28 = new ol.format.GeoJSON();
var features_building_house_amenity_house_28 = format_building_house_amenity_house_28.readFeatures(json_building_house_amenity_house_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_amenity_house_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_amenity_house_28.addFeatures(features_building_house_amenity_house_28);
var lyr_building_house_amenity_house_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_house_amenity_house_28, 
                style: style_building_house_amenity_house_28,
                interactive: true,
                title: '<img src="styles/legend/building_house_amenity_house_28.png" /> building_house_amenity_house'
            });
var format_Corner_Stone_29 = new ol.format.GeoJSON();
var features_Corner_Stone_29 = format_Corner_Stone_29.readFeatures(json_Corner_Stone_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corner_Stone_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corner_Stone_29.addFeatures(features_Corner_Stone_29);
var lyr_Corner_Stone_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Corner_Stone_29, 
                style: style_Corner_Stone_29,
                interactive: true,
                title: '<img src="styles/legend/Corner_Stone_29.png" /> Corner_Stone'
            });
var format_Corner_Stone_30 = new ol.format.GeoJSON();
var features_Corner_Stone_30 = format_Corner_Stone_30.readFeatures(json_Corner_Stone_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corner_Stone_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corner_Stone_30.addFeatures(features_Corner_Stone_30);
var lyr_Corner_Stone_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Corner_Stone_30, 
                style: style_Corner_Stone_30,
                interactive: true,
                title: '<img src="styles/legend/Corner_Stone_30.png" /> Corner_Stone'
            });
var format_Agriculture_31 = new ol.format.GeoJSON();
var features_Agriculture_31 = format_Agriculture_31.readFeatures(json_Agriculture_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agriculture_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agriculture_31.addFeatures(features_Agriculture_31);
var lyr_Agriculture_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agriculture_31, 
                style: style_Agriculture_31,
                interactive: true,
                title: '<img src="styles/legend/Agriculture_31.png" /> Agriculture'
            });
var format_Temple_Buildings_32 = new ol.format.GeoJSON();
var features_Temple_Buildings_32 = format_Temple_Buildings_32.readFeatures(json_Temple_Buildings_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temple_Buildings_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temple_Buildings_32.addFeatures(features_Temple_Buildings_32);
var lyr_Temple_Buildings_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temple_Buildings_32, 
                style: style_Temple_Buildings_32,
                interactive: true,
                title: '<img src="styles/legend/Temple_Buildings_32.png" /> Temple_Buildings'
            });
var format_Villa_Blocks_33 = new ol.format.GeoJSON();
var features_Villa_Blocks_33 = format_Villa_Blocks_33.readFeatures(json_Villa_Blocks_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Villa_Blocks_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villa_Blocks_33.addFeatures(features_Villa_Blocks_33);
var lyr_Villa_Blocks_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Villa_Blocks_33, 
                style: style_Villa_Blocks_33,
                interactive: true,
                title: '<img src="styles/legend/Villa_Blocks_33.png" /> Villa_Blocks'
            });
var format_Atherton_Farms_Limit_34 = new ol.format.GeoJSON();
var features_Atherton_Farms_Limit_34 = format_Atherton_Farms_Limit_34.readFeatures(json_Atherton_Farms_Limit_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atherton_Farms_Limit_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atherton_Farms_Limit_34.addFeatures(features_Atherton_Farms_Limit_34);
var lyr_Atherton_Farms_Limit_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Atherton_Farms_Limit_34, 
                style: style_Atherton_Farms_Limit_34,
                interactive: true,
                title: '<img src="styles/legend/Atherton_Farms_Limit_34.png" /> Atherton_Farms_Limit'
            });

lyr_MO_structure_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleSattleiite_2.setVisible(true);lyr_highway_motorway_highway_motorway_link_3.setVisible(true);lyr_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4.setVisible(true);lyr_waterway_5.setVisible(true);lyr_waterway_6.setVisible(true);lyr_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7.setVisible(true);lyr_waterway_river_8.setVisible(true);lyr_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9.setVisible(true);lyr_waterway_stream_10.setVisible(true);lyr_waterway_stream_11.setVisible(true);lyr_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12.setVisible(true);lyr_natural_tree_13.setVisible(true);lyr_natural_tree_row_14.setVisible(true);lyr_natural_tree_15.setVisible(true);lyr_leisure_common_leisure_park_16.setVisible(true);lyr_leisure_park_17.setVisible(true);lyr_leisure_nature_reserve_18.setVisible(true);lyr_leisure_park_19.setVisible(true);lyr_leisure_playground_20.setVisible(true);lyr_natural_tree_21.setVisible(true);lyr_amenity_restaurant_22.setVisible(true);lyr_recycling_type_centre_23.setVisible(true);lyr_addrstreet_24.setVisible(true);lyr_building_industrial_25.setVisible(true);lyr_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26.setVisible(true);lyr_bridge_27.setVisible(true);lyr_building_house_amenity_house_28.setVisible(true);lyr_Corner_Stone_29.setVisible(true);lyr_Corner_Stone_30.setVisible(true);lyr_Agriculture_31.setVisible(true);lyr_Temple_Buildings_32.setVisible(true);lyr_Villa_Blocks_33.setVisible(true);lyr_Atherton_Farms_Limit_34.setVisible(true);
var layersList = [lyr_MO_structure_0,lyr_OpenStreetMap_1,lyr_GoogleSattleiite_2,lyr_highway_motorway_highway_motorway_link_3,lyr_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4,lyr_waterway_5,lyr_waterway_6,lyr_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7,lyr_waterway_river_8,lyr_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9,lyr_waterway_stream_10,lyr_waterway_stream_11,lyr_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12,lyr_natural_tree_13,lyr_natural_tree_row_14,lyr_natural_tree_15,lyr_leisure_common_leisure_park_16,lyr_leisure_park_17,lyr_leisure_nature_reserve_18,lyr_leisure_park_19,lyr_leisure_playground_20,lyr_natural_tree_21,lyr_amenity_restaurant_22,lyr_recycling_type_centre_23,lyr_addrstreet_24,lyr_building_industrial_25,lyr_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26,lyr_bridge_27,lyr_building_house_amenity_house_28,lyr_Corner_Stone_29,lyr_Corner_Stone_30,lyr_Agriculture_31,lyr_Temple_Buildings_32,lyr_Villa_Blocks_33,lyr_Atherton_Farms_Limit_34];
lyr_MO_structure_0.set('fieldAliases', {'STATE': 'STATE', 'DESCRIPT': 'DESCRIPT', 'MISC': 'MISC', 'REF_ID': 'REF_ID', 'SRC_URL': 'SRC_URL', 'GEOM': 'GEOM', 'WEB_GEOM': 'WEB_GEOM', 'SYMBOL': 'SYMBOL', });
lyr_highway_motorway_highway_motorway_link_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'junction': 'junction', 'service': 'service', 'bicycle': 'bicycle', 'motor_vehicle': 'motor_vehicle', 'level': 'level', 'turn:lanes:both_ways': 'turn:lanes:both_ways', 'lanes:both_ways': 'lanes:both_ways', 'cycleway': 'cycleway', 'destination:ref': 'destination:ref', 'turn:lanes:forward': 'turn:lanes:forward', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'maxspeed:type': 'maxspeed:type', 'ref': 'ref', 'covered': 'covered', 'highway_1': 'highway_1', 'segregated': 'segregated', 'is_in': 'is_in', 'foot': 'foot', 'layer': 'layer', 'bridge': 'bridge', 'postal_code': 'postal_code', 'tiger:zip_right_2': 'tiger:zip_right_2', 'tiger:zip_left_3': 'tiger:zip_left_3', 'tiger:zip_right_1': 'tiger:zip_right_1', 'tiger:name_direction_suffix_2': 'tiger:name_direction_suffix_2', 'tiger:zip_left_2': 'tiger:zip_left_2', 'tiger:zip_left_1': 'tiger:zip_left_1', 'lanes': 'lanes', 'tiger:name_type_2': 'tiger:name_type_2', 'tiger:name_direction_prefix_2': 'tiger:name_direction_prefix_2', 'tiger:name_base_2': 'tiger:name_base_2', 'name_2': 'name_2', 'oneway': 'oneway', 'tiger:name_direction_suffix_1': 'tiger:name_direction_suffix_1', 'tiger:name_direction_suffix': 'tiger:name_direction_suffix', 'tiger:name_direction_prefix_1': 'tiger:name_direction_prefix_1', 'maxspeed': 'maxspeed', 'surface': 'surface', 'tiger:upload_uuid': 'tiger:upload_uuid', 'tiger:tlid': 'tiger:tlid', 'tiger:source': 'tiger:source', 'tiger:separated': 'tiger:separated', 'access': 'access', 'tiger:name_type_1': 'tiger:name_type_1', 'tiger:name_base_1': 'tiger:name_base_1', 'name_1': 'name_1', 'tiger:zip_right': 'tiger:zip_right', 'tiger:zip_left': 'tiger:zip_left', 'tiger:reviewed': 'tiger:reviewed', 'tiger:name_type': 'tiger:name_type', 'tiger:name_direction_prefix': 'tiger:name_direction_prefix', 'tiger:name_base': 'tiger:name_base', 'tiger:county': 'tiger:county', 'tiger:cfcc': 'tiger:cfcc', 'name': 'name', });
lyr_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'junction': 'junction', 'service': 'service', 'bicycle': 'bicycle', 'motor_vehi': 'motor_vehi', 'level': 'level', 'turn_lanes': 'turn_lanes', 'lanes_both': 'lanes_both', 'cycleway': 'cycleway', 'destinatio': 'destinatio', 'turn_lan_1': 'turn_lan_1', 'lanes_forw': 'lanes_forw', 'lanes_back': 'lanes_back', 'maxspeed_t': 'maxspeed_t', 'ref': 'ref', 'covered': 'covered', 'highway_1': 'highway_1', 'segregated': 'segregated', 'is_in': 'is_in', 'foot': 'foot', 'layer': 'layer', 'bridge': 'bridge', 'postal_cod': 'postal_cod', 'tiger_zip_': 'tiger_zip_', 'tiger_zi_1': 'tiger_zi_1', 'tiger_zi_2': 'tiger_zi_2', 'tiger_name': 'tiger_name', 'tiger_zi_3': 'tiger_zi_3', 'tiger_zi_4': 'tiger_zi_4', 'lanes': 'lanes', 'tiger_na_1': 'tiger_na_1', 'tiger_na_2': 'tiger_na_2', 'tiger_na_3': 'tiger_na_3', 'name_2': 'name_2', 'oneway': 'oneway', 'tiger_na_4': 'tiger_na_4', 'tiger_na_5': 'tiger_na_5', 'tiger_na_6': 'tiger_na_6', 'maxspeed': 'maxspeed', 'surface': 'surface', 'tiger_uplo': 'tiger_uplo', 'tiger_tlid': 'tiger_tlid', 'tiger_sour': 'tiger_sour', 'tiger_sepa': 'tiger_sepa', 'access': 'access', 'tiger_na_7': 'tiger_na_7', 'tiger_na_8': 'tiger_na_8', 'name_1': 'name_1', 'tiger_zi_5': 'tiger_zi_5', 'tiger_zi_6': 'tiger_zi_6', 'tiger_revi': 'tiger_revi', 'tiger_na_9': 'tiger_na_9', 'tiger_na10': 'tiger_na10', 'tiger_na11': 'tiger_na11', 'tiger_coun': 'tiger_coun', 'tiger_cfcc': 'tiger_cfcc', 'name': 'name', });
lyr_waterway_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'seasonal': 'seasonal', 'motor_vehicle': 'motor_vehicle', 'ford': 'ford', 'foot': 'foot', 'depth': 'depth', 'bicycle': 'bicycle', });
lyr_waterway_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'tunnel': 'tunnel', 'layer': 'layer', 'name': 'name', });
lyr_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'tunnel': 'tunnel', 'layer': 'layer', 'name': 'name', });
lyr_waterway_river_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'name': 'name', });
lyr_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'name': 'name', });
lyr_waterway_stream_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'seasonal': 'seasonal', 'motor_vehicle': 'motor_vehicle', 'ford': 'ford', 'foot': 'foot', 'depth': 'depth', 'bicycle': 'bicycle', });
lyr_waterway_stream_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'tunnel': 'tunnel', 'layer': 'layer', 'name': 'name', });
lyr_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'tunnel': 'tunnel', 'layer': 'layer', 'name': 'name', });
lyr_natural_tree_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', 'leaf_type': 'leaf_type', 'leaf_cycle': 'leaf_cycle', });
lyr_natural_tree_row_14.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', });
lyr_natural_tree_15.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', 'leaf_type': 'leaf_type', 'leaf_cycle': 'leaf_cycle', });
lyr_leisure_common_leisure_park_16.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', });
lyr_leisure_park_17.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', });
lyr_leisure_nature_reserve_18.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'leisure': 'leisure', 'name': 'name', });
lyr_leisure_park_19.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', });
lyr_leisure_playground_20.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'leisure': 'leisure', 'operator': 'operator', 'name': 'name', });
lyr_natural_tree_21.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', 'leaf_type': 'leaf_type', 'leaf_cycle': 'leaf_cycle', });
lyr_amenity_restaurant_22.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'name': 'name', 'building': 'building', });
lyr_recycling_type_centre_23.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'recycling_type': 'recycling_type', 'amenity': 'amenity', });
lyr_addrstreet_24.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:street': 'addr:street', 'entrance': 'entrance', 'access': 'access', 'phone': 'phone', 'website': 'website', 'religion': 'religion', 'name': 'name', 'denomination': 'denomination', 'amenity': 'amenity', 'addr:state': 'addr:state', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_building_industrial_25.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'cooling:method': 'cooling:method', 'owner': 'owner', 'material': 'material', 'man_made': 'man_made', 'description': 'description', });
lyr_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'cooling_me': 'cooling_me', 'owner': 'owner', 'material': 'material', 'man_made': 'man_made', 'descriptio': 'descriptio', });
lyr_bridge_27.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'bridge': 'bridge', 'turn:lanes:both_ways': 'turn:lanes:both_ways', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'tiger:name_type_1': 'tiger:name_type_1', 'tiger:name_direction_prefix_1': 'tiger:name_direction_prefix_1', 'tiger:name_base_1': 'tiger:name_base_1', 'name_1': 'name_1', 'ref': 'ref', 'lanes': 'lanes', 'access': 'access', 'highway_1': 'highway_1', 'tiger:name_direction_suffix': 'tiger:name_direction_suffix', 'surface': 'surface', 'segregated': 'segregated', 'oneway': 'oneway', 'foot': 'foot', 'bicycle': 'bicycle', 'usage': 'usage', 'railway': 'railway', 'operator': 'operator', 'old_railway_operator': 'old_railway_operator', 'note:old_railway_operator': 'note:old_railway_operator', 'maxspeed': 'maxspeed', 'gauge': 'gauge', 'electrified': 'electrified', 'tiger:zip_right': 'tiger:zip_right', 'tiger:zip_left': 'tiger:zip_left', 'tiger:name_type': 'tiger:name_type', 'tiger:name_direction_prefix': 'tiger:name_direction_prefix', 'tiger:reviewed': 'tiger:reviewed', 'tiger:name_base': 'tiger:name_base', 'tiger:county': 'tiger:county', 'tiger:cfcc': 'tiger:cfcc', 'name': 'name', 'layer': 'layer', 'highway': 'highway', });
lyr_building_house_amenity_house_28.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:state': 'addr:state', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_Corner_Stone_29.set('fieldAliases', {'id': 'id', });
lyr_Corner_Stone_30.set('fieldAliases', {'id': 'id', });
lyr_Agriculture_31.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_Temple_Buildings_32.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_Villa_Blocks_33.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_Atherton_Farms_Limit_34.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_MO_structure_0.set('fieldImages', {'STATE': '', 'DESCRIPT': '', 'MISC': '', 'REF_ID': '', 'SRC_URL': '', 'GEOM': '', 'WEB_GEOM': '', 'SYMBOL': '', });
lyr_highway_motorway_highway_motorway_link_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'junction': '', 'service': '', 'bicycle': '', 'motor_vehicle': '', 'level': '', 'turn:lanes:both_ways': '', 'lanes:both_ways': '', 'cycleway': '', 'destination:ref': '', 'turn:lanes:forward': '', 'lanes:forward': '', 'lanes:backward': '', 'maxspeed:type': '', 'ref': '', 'covered': '', 'highway_1': '', 'segregated': '', 'is_in': '', 'foot': '', 'layer': '', 'bridge': '', 'postal_code': '', 'tiger:zip_right_2': '', 'tiger:zip_left_3': '', 'tiger:zip_right_1': '', 'tiger:name_direction_suffix_2': '', 'tiger:zip_left_2': '', 'tiger:zip_left_1': '', 'lanes': '', 'tiger:name_type_2': '', 'tiger:name_direction_prefix_2': '', 'tiger:name_base_2': '', 'name_2': '', 'oneway': '', 'tiger:name_direction_suffix_1': '', 'tiger:name_direction_suffix': '', 'tiger:name_direction_prefix_1': '', 'maxspeed': '', 'surface': '', 'tiger:upload_uuid': '', 'tiger:tlid': '', 'tiger:source': '', 'tiger:separated': '', 'access': '', 'tiger:name_type_1': '', 'tiger:name_base_1': '', 'name_1': '', 'tiger:zip_right': '', 'tiger:zip_left': '', 'tiger:reviewed': '', 'tiger:name_type': '', 'tiger:name_direction_prefix': '', 'tiger:name_base': '', 'tiger:county': '', 'tiger:cfcc': '', 'name': '', });
lyr_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'junction': 'TextEdit', 'service': 'TextEdit', 'bicycle': 'TextEdit', 'motor_vehi': 'TextEdit', 'level': 'TextEdit', 'turn_lanes': 'TextEdit', 'lanes_both': 'TextEdit', 'cycleway': 'TextEdit', 'destinatio': 'TextEdit', 'turn_lan_1': 'TextEdit', 'lanes_forw': 'TextEdit', 'lanes_back': 'TextEdit', 'maxspeed_t': 'TextEdit', 'ref': 'TextEdit', 'covered': 'TextEdit', 'highway_1': 'TextEdit', 'segregated': 'TextEdit', 'is_in': 'TextEdit', 'foot': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'postal_cod': 'TextEdit', 'tiger_zip_': 'TextEdit', 'tiger_zi_1': 'TextEdit', 'tiger_zi_2': 'TextEdit', 'tiger_name': 'TextEdit', 'tiger_zi_3': 'TextEdit', 'tiger_zi_4': 'TextEdit', 'lanes': 'TextEdit', 'tiger_na_1': 'TextEdit', 'tiger_na_2': 'TextEdit', 'tiger_na_3': 'TextEdit', 'name_2': 'TextEdit', 'oneway': 'TextEdit', 'tiger_na_4': 'TextEdit', 'tiger_na_5': 'TextEdit', 'tiger_na_6': 'TextEdit', 'maxspeed': 'TextEdit', 'surface': 'TextEdit', 'tiger_uplo': 'TextEdit', 'tiger_tlid': 'TextEdit', 'tiger_sour': 'TextEdit', 'tiger_sepa': 'TextEdit', 'access': 'TextEdit', 'tiger_na_7': 'TextEdit', 'tiger_na_8': 'TextEdit', 'name_1': 'TextEdit', 'tiger_zi_5': 'TextEdit', 'tiger_zi_6': 'TextEdit', 'tiger_revi': 'TextEdit', 'tiger_na_9': 'TextEdit', 'tiger_na10': 'TextEdit', 'tiger_na11': 'TextEdit', 'tiger_coun': 'TextEdit', 'tiger_cfcc': 'TextEdit', 'name': 'TextEdit', });
lyr_waterway_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'seasonal': '', 'motor_vehicle': '', 'ford': '', 'foot': '', 'depth': '', 'bicycle': '', });
lyr_waterway_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'waterway': '', 'tunnel': '', 'layer': '', 'name': '', });
lyr_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'waterway': '', 'tunnel': '', 'layer': '', 'name': '', });
lyr_waterway_river_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'waterway': 'TextEdit', 'name': 'TextEdit', });
lyr_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'waterway': 'TextEdit', 'name': 'TextEdit', });
lyr_waterway_stream_10.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'seasonal': '', 'motor_vehicle': '', 'ford': '', 'foot': '', 'depth': '', 'bicycle': '', });
lyr_waterway_stream_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'waterway': 'TextEdit', 'tunnel': 'TextEdit', 'layer': 'TextEdit', 'name': 'TextEdit', });
lyr_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'waterway': '', 'tunnel': '', 'layer': '', 'name': '', });
lyr_natural_tree_13.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'natural': '', 'leaf_type': '', 'leaf_cycle': '', });
lyr_natural_tree_row_14.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'natural': '', });
lyr_natural_tree_15.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'natural': '', 'leaf_type': '', 'leaf_cycle': '', });
lyr_leisure_common_leisure_park_16.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', });
lyr_leisure_park_17.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', });
lyr_leisure_nature_reserve_18.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'leisure': '', 'name': '', });
lyr_leisure_park_19.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'power': '', });
lyr_leisure_playground_20.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'leisure': '', 'operator': '', 'name': '', });
lyr_natural_tree_21.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'natural': '', 'leaf_type': '', 'leaf_cycle': '', });
lyr_amenity_restaurant_22.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'name': '', 'building': '', });
lyr_recycling_type_centre_23.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'recycling_type': '', 'amenity': '', });
lyr_addrstreet_24.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'addr:street': '', 'entrance': '', 'access': '', 'phone': '', 'website': '', 'religion': '', 'name': '', 'denomination': '', 'amenity': '', 'addr:state': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_building_industrial_25.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'cooling:method': '', 'owner': '', 'material': '', 'man_made': '', 'description': '', });
lyr_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'cooling_me': '', 'owner': '', 'material': '', 'man_made': '', 'descriptio': '', });
lyr_bridge_27.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'bridge': '', 'turn:lanes:both_ways': '', 'lanes:forward': '', 'lanes:backward': '', 'tiger:name_type_1': '', 'tiger:name_direction_prefix_1': '', 'tiger:name_base_1': '', 'name_1': '', 'ref': '', 'lanes': '', 'access': '', 'highway_1': '', 'tiger:name_direction_suffix': '', 'surface': '', 'segregated': '', 'oneway': '', 'foot': '', 'bicycle': '', 'usage': '', 'railway': '', 'operator': '', 'old_railway_operator': '', 'note:old_railway_operator': '', 'maxspeed': '', 'gauge': '', 'electrified': '', 'tiger:zip_right': '', 'tiger:zip_left': '', 'tiger:name_type': '', 'tiger:name_direction_prefix': '', 'tiger:reviewed': '', 'tiger:name_base': '', 'tiger:county': '', 'tiger:cfcc': '', 'name': '', 'layer': '', 'highway': '', });
lyr_building_house_amenity_house_28.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:street': '', 'addr:state': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_Corner_Stone_29.set('fieldImages', {'id': '', });
lyr_Corner_Stone_30.set('fieldImages', {'id': 'TextEdit', });
lyr_Agriculture_31.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_Temple_Buildings_32.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_Villa_Blocks_33.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_Atherton_Farms_Limit_34.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_MO_structure_0.set('fieldLabels', {'STATE': 'no label', 'DESCRIPT': 'no label', 'MISC': 'no label', 'REF_ID': 'no label', 'SRC_URL': 'no label', 'GEOM': 'no label', 'WEB_GEOM': 'no label', 'SYMBOL': 'no label', });
lyr_highway_motorway_highway_motorway_link_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'junction': 'no label', 'service': 'no label', 'bicycle': 'no label', 'motor_vehicle': 'no label', 'level': 'no label', 'turn:lanes:both_ways': 'no label', 'lanes:both_ways': 'no label', 'cycleway': 'no label', 'destination:ref': 'no label', 'turn:lanes:forward': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'maxspeed:type': 'no label', 'ref': 'no label', 'covered': 'no label', 'highway_1': 'no label', 'segregated': 'no label', 'is_in': 'no label', 'foot': 'no label', 'layer': 'no label', 'bridge': 'no label', 'postal_code': 'no label', 'tiger:zip_right_2': 'no label', 'tiger:zip_left_3': 'no label', 'tiger:zip_right_1': 'no label', 'tiger:name_direction_suffix_2': 'no label', 'tiger:zip_left_2': 'no label', 'tiger:zip_left_1': 'no label', 'lanes': 'no label', 'tiger:name_type_2': 'no label', 'tiger:name_direction_prefix_2': 'no label', 'tiger:name_base_2': 'no label', 'name_2': 'no label', 'oneway': 'no label', 'tiger:name_direction_suffix_1': 'no label', 'tiger:name_direction_suffix': 'no label', 'tiger:name_direction_prefix_1': 'no label', 'maxspeed': 'no label', 'surface': 'no label', 'tiger:upload_uuid': 'no label', 'tiger:tlid': 'no label', 'tiger:source': 'no label', 'tiger:separated': 'no label', 'access': 'no label', 'tiger:name_type_1': 'no label', 'tiger:name_base_1': 'no label', 'name_1': 'no label', 'tiger:zip_right': 'no label', 'tiger:zip_left': 'no label', 'tiger:reviewed': 'no label', 'tiger:name_type': 'no label', 'tiger:name_direction_prefix': 'no label', 'tiger:name_base': 'no label', 'tiger:county': 'no label', 'tiger:cfcc': 'no label', 'name': 'no label', });
lyr_EPO_indep_mo_streets_reduced_EPSG2817NAD83HARNMissouriWest_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'junction': 'no label', 'service': 'no label', 'bicycle': 'no label', 'motor_vehi': 'no label', 'level': 'no label', 'turn_lanes': 'no label', 'lanes_both': 'no label', 'cycleway': 'no label', 'destinatio': 'no label', 'turn_lan_1': 'no label', 'lanes_forw': 'no label', 'lanes_back': 'no label', 'maxspeed_t': 'no label', 'ref': 'no label', 'covered': 'no label', 'highway_1': 'no label', 'segregated': 'no label', 'is_in': 'no label', 'foot': 'no label', 'layer': 'no label', 'bridge': 'no label', 'postal_cod': 'no label', 'tiger_zip_': 'no label', 'tiger_zi_1': 'no label', 'tiger_zi_2': 'no label', 'tiger_name': 'no label', 'tiger_zi_3': 'no label', 'tiger_zi_4': 'no label', 'lanes': 'no label', 'tiger_na_1': 'no label', 'tiger_na_2': 'no label', 'tiger_na_3': 'no label', 'name_2': 'no label', 'oneway': 'no label', 'tiger_na_4': 'no label', 'tiger_na_5': 'no label', 'tiger_na_6': 'no label', 'maxspeed': 'no label', 'surface': 'no label', 'tiger_uplo': 'no label', 'tiger_tlid': 'no label', 'tiger_sour': 'no label', 'tiger_sepa': 'no label', 'access': 'no label', 'tiger_na_7': 'no label', 'tiger_na_8': 'no label', 'name_1': 'no label', 'tiger_zi_5': 'no label', 'tiger_zi_6': 'no label', 'tiger_revi': 'no label', 'tiger_na_9': 'no label', 'tiger_na10': 'no label', 'tiger_na11': 'no label', 'tiger_coun': 'no label', 'tiger_cfcc': 'no label', 'name': 'no label', });
lyr_waterway_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'seasonal': 'no label', 'motor_vehicle': 'no label', 'ford': 'no label', 'foot': 'no label', 'depth': 'no label', 'bicycle': 'no label', });
lyr_waterway_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'waterway': 'no label', 'tunnel': 'no label', 'layer': 'no label', 'name': 'no label', });
lyr_EPO_indep_mo_waterway_EPSG2817NAD83HARNMissouriWest_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'waterway': 'no label', 'tunnel': 'no label', 'layer': 'no label', 'name': 'no label', });
lyr_waterway_river_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'waterway': 'no label', 'name': 'no label', });
lyr_EPO_indep_mo_waterway_river_EPSG2817NAD83HARNMissouriWest_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'waterway': 'no label', 'name': 'no label', });
lyr_waterway_stream_10.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'seasonal': 'no label', 'motor_vehicle': 'no label', 'ford': 'no label', 'foot': 'no label', 'depth': 'no label', 'bicycle': 'no label', });
lyr_waterway_stream_11.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'waterway': 'no label', 'tunnel': 'no label', 'layer': 'no label', 'name': 'no label', });
lyr_EPO_indep_mo_waterway_stream_EPSG2817NAD83HARNMissouriWest_12.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'waterway': 'no label', 'tunnel': 'no label', 'layer': 'no label', 'name': 'no label', });
lyr_natural_tree_13.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'natural': 'no label', 'leaf_type': 'no label', 'leaf_cycle': 'no label', });
lyr_natural_tree_row_14.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'natural': 'no label', });
lyr_natural_tree_15.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'natural': 'no label', 'leaf_type': 'no label', 'leaf_cycle': 'no label', });
lyr_leisure_common_leisure_park_16.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', });
lyr_leisure_park_17.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', });
lyr_leisure_nature_reserve_18.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'leisure': 'no label', 'name': 'no label', });
lyr_leisure_park_19.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', });
lyr_leisure_playground_20.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'leisure': 'no label', 'operator': 'no label', 'name': 'no label', });
lyr_natural_tree_21.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'natural': 'no label', 'leaf_type': 'no label', 'leaf_cycle': 'no label', });
lyr_amenity_restaurant_22.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'name': 'no label', 'building': 'no label', });
lyr_recycling_type_centre_23.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'header label', 'osm_type': 'no label', 'recycling_type': 'no label', 'amenity': 'no label', });
lyr_addrstreet_24.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:street': 'no label', 'entrance': 'no label', 'access': 'no label', 'phone': 'no label', 'website': 'no label', 'religion': 'no label', 'name': 'no label', 'denomination': 'no label', 'amenity': 'no label', 'addr:state': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_building_industrial_25.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'cooling:method': 'no label', 'owner': 'no label', 'material': 'no label', 'man_made': 'no label', 'description': 'no label', });
lyr_EPO_indep_mo_building_industrial_EPSG2817NAD83HARNMissouriWest_26.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'cooling_me': 'no label', 'owner': 'no label', 'material': 'no label', 'man_made': 'no label', 'descriptio': 'no label', });
lyr_bridge_27.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'bridge': 'no label', 'turn:lanes:both_ways': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'tiger:name_type_1': 'no label', 'tiger:name_direction_prefix_1': 'no label', 'tiger:name_base_1': 'no label', 'name_1': 'no label', 'ref': 'no label', 'lanes': 'no label', 'access': 'no label', 'highway_1': 'no label', 'tiger:name_direction_suffix': 'no label', 'surface': 'no label', 'segregated': 'no label', 'oneway': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'usage': 'no label', 'railway': 'no label', 'operator': 'no label', 'old_railway_operator': 'no label', 'note:old_railway_operator': 'no label', 'maxspeed': 'no label', 'gauge': 'no label', 'electrified': 'no label', 'tiger:zip_right': 'no label', 'tiger:zip_left': 'no label', 'tiger:name_type': 'no label', 'tiger:name_direction_prefix': 'no label', 'tiger:reviewed': 'no label', 'tiger:name_base': 'no label', 'tiger:county': 'no label', 'tiger:cfcc': 'no label', 'name': 'no label', 'layer': 'no label', 'highway': 'no label', });
lyr_building_house_amenity_house_28.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:state': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_Corner_Stone_29.set('fieldLabels', {'id': 'no label', });
lyr_Corner_Stone_30.set('fieldLabels', {'id': 'no label', });
lyr_Agriculture_31.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_Temple_Buildings_32.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_Villa_Blocks_33.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_Atherton_Farms_Limit_34.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_Atherton_Farms_Limit_34.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});