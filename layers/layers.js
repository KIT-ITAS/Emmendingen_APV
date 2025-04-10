ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([385064.591916, 5305374.717850, 450188.304683, 5354831.105247]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Emmendingen_1 = new ol.format.GeoJSON();
var features_Emmendingen_1 = format_Emmendingen_1.readFeatures(json_Emmendingen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Emmendingen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emmendingen_1.addFeatures(features_Emmendingen_1);
var lyr_Emmendingen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emmendingen_1, 
                style: style_Emmendingen_1,
                popuplayertitle: 'Emmendingen',
                interactive: true,
                title: '<img src="styles/legend/Emmendingen_1.png" /> Emmendingen'
            });
var format_Protected_area_clipped_2 = new ol.format.GeoJSON();
var features_Protected_area_clipped_2 = format_Protected_area_clipped_2.readFeatures(json_Protected_area_clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Protected_area_clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Protected_area_clipped_2.addFeatures(features_Protected_area_clipped_2);
var lyr_Protected_area_clipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Protected_area_clipped_2, 
                style: style_Protected_area_clipped_2,
                popuplayertitle: 'Protected_area_clipped',
                interactive: false,
                title: '<img src="styles/legend/Protected_area_clipped_2.png" /> Protected_area_clipped'
            });
var format_Natur2000_2021_clipped_3 = new ol.format.GeoJSON();
var features_Natur2000_2021_clipped_3 = format_Natur2000_2021_clipped_3.readFeatures(json_Natur2000_2021_clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Natur2000_2021_clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Natur2000_2021_clipped_3.addFeatures(features_Natur2000_2021_clipped_3);
var lyr_Natur2000_2021_clipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Natur2000_2021_clipped_3, 
                style: style_Natur2000_2021_clipped_3,
                popuplayertitle: 'Natur2000_2021_clipped',
                interactive: false,
                title: '<img src="styles/legend/Natur2000_2021_clipped_3.png" /> Natur2000_2021_clipped'
            });
var format_CropType_2021_poly_4 = new ol.format.GeoJSON();
var features_CropType_2021_poly_4 = format_CropType_2021_poly_4.readFeatures(json_CropType_2021_poly_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_CropType_2021_poly_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CropType_2021_poly_4.addFeatures(features_CropType_2021_poly_4);
var lyr_CropType_2021_poly_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CropType_2021_poly_4, 
                style: style_CropType_2021_poly_4,
                popuplayertitle: 'CropType_2021_poly',
                interactive: false,
    title: 'CropType_2021_poly<br />\
    <img src="styles/legend/CropType_2021_poly_4_0.png" /> Ackerbohne<br />\
    <img src="styles/legend/CropType_2021_poly_4_1.png" /> Ackerfutter<br />\
    <img src="styles/legend/CropType_2021_poly_4_2.png" /> Brachen<br />\
    <img src="styles/legend/CropType_2021_poly_4_3.png" /> Dauergruenland<br />\
    <img src="styles/legend/CropType_2021_poly_4_4.png" /> Erbse<br />\
    <img src="styles/legend/CropType_2021_poly_4_5.png" /> Gartenbauerzeugnisse<br />\
    <img src="styles/legend/CropType_2021_poly_4_6.png" /> Gehoelz<br />\
    <img src="styles/legend/CropType_2021_poly_4_7.png" /> Gehoelz auf sonstigen Flaechen<br />\
    <img src="styles/legend/CropType_2021_poly_4_8.png" /> Kartoffeln<br />\
    <img src="styles/legend/CropType_2021_poly_4_9.png" /> Lupine<br />\
    <img src="styles/legend/CropType_2021_poly_4_10.png" /> Mais<br />\
    <img src="styles/legend/CropType_2021_poly_4_11.png" /> Plantagen<br />\
    <img src="styles/legend/CropType_2021_poly_4_12.png" /> Rebflaechen<br />\
    <img src="styles/legend/CropType_2021_poly_4_13.png" /> Soja<br />\
    <img src="styles/legend/CropType_2021_poly_4_14.png" /> Sommergerste<br />\
    <img src="styles/legend/CropType_2021_poly_4_15.png" /> Sommerhafer<br />\
    <img src="styles/legend/CropType_2021_poly_4_16.png" /> Sonnenblumen<br />\
    <img src="styles/legend/CropType_2021_poly_4_17.png" /> Sonstige Flaechen<br />\
    <img src="styles/legend/CropType_2021_poly_4_18.png" /> Sonstige landwirtschaftliche Flaechen<br />\
    <img src="styles/legend/CropType_2021_poly_4_19.png" /> Wintergerste<br />\
    <img src="styles/legend/CropType_2021_poly_4_20.png" /> Winterraps<br />\
    <img src="styles/legend/CropType_2021_poly_4_21.png" /> Winterroggen<br />\
    <img src="styles/legend/CropType_2021_poly_4_22.png" /> Winterweizen<br />\
    <img src="styles/legend/CropType_2021_poly_4_23.png" /> Zuckerruebe<br />\
    <img src="styles/legend/CropType_2021_poly_4_24.png" /> <br />' });
var format_Landscape2022_clipped_5 = new ol.format.GeoJSON();
var features_Landscape2022_clipped_5 = format_Landscape2022_clipped_5.readFeatures(json_Landscape2022_clipped_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Landscape2022_clipped_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landscape2022_clipped_5.addFeatures(features_Landscape2022_clipped_5);
var lyr_Landscape2022_clipped_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landscape2022_clipped_5, 
                style: style_Landscape2022_clipped_5,
                popuplayertitle: 'Landscape2022_clipped',
                interactive: false,
                title: '<img src="styles/legend/Landscape2022_clipped_5.png" /> Landscape2022_clipped'
            });
var format_non_res_suit_6 = new ol.format.GeoJSON();
var features_non_res_suit_6 = format_non_res_suit_6.readFeatures(json_non_res_suit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_non_res_suit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_non_res_suit_6.addFeatures(features_non_res_suit_6);
var lyr_non_res_suit_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_non_res_suit_6, 
                style: style_non_res_suit_6,
                popuplayertitle: 'non_res_suit',
                interactive: true,
    title: 'non_res_suit<br />\
    <img src="styles/legend/non_res_suit_6_0.png" /> Dauergruenland<br />\
    <img src="styles/legend/non_res_suit_6_1.png" /> Plantagen<br />\
    <img src="styles/legend/non_res_suit_6_2.png" /> Rebflaechen<br />\
    <img src="styles/legend/non_res_suit_6_3.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Emmendingen_1.setVisible(true);lyr_Protected_area_clipped_2.setVisible(false);lyr_Natur2000_2021_clipped_3.setVisible(false);lyr_CropType_2021_poly_4.setVisible(false);lyr_Landscape2022_clipped_5.setVisible(false);lyr_non_res_suit_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Emmendingen_1,lyr_Protected_area_clipped_2,lyr_Natur2000_2021_clipped_3,lyr_CropType_2021_poly_4,lyr_Landscape2022_clipped_5,lyr_non_res_suit_6];
lyr_Emmendingen_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', });
lyr_Protected_area_clipped_2.set('fieldAliases', {'SITECODE': 'SITECODE', 'SITENAME': 'SITENAME', 'RELEASE_DA': 'RELEASE_DA', 'MS': 'MS', 'SITETYPE': 'SITETYPE', 'INSPIRE_ID': 'INSPIRE_ID', 'name': 'name', 'Nr': 'Nr', 'Zusatz': 'Zusatz', 'Area': 'Area', 'BL': 'BL', 'LAND': 'LAND', 'MODELLART': 'MODELLART', 'OBJART': 'OBJART', 'OBJART_TXT': 'OBJART_TXT', 'OBJID': 'OBJID', 'HDU_X': 'HDU_X', 'FDV_X': 'FDV_X', 'BEGINN': 'BEGINN', 'ENDE': 'ENDE', 'OBJART_Z': 'OBJART_Z', 'OBJID_Z': 'OBJID_Z', 'FDV_Z_X': 'FDV_Z_X', 'ADF': 'ADF', 'BEZ': 'BEZ', 'FKT': 'FKT', 'NAM': 'NAM', 'NRS': 'NRS', 'NUM': 'NUM', 'RZS': 'RZS', 'SGN': 'SGN', 'ZON': 'ZON', 'ZUS': 'ZUS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Natur2000_2021_clipped_3.set('fieldAliases', {'SITECODE': 'SITECODE', 'SITENAME': 'SITENAME', 'RELEASE_DA': 'RELEASE_DA', 'MS': 'MS', 'SITETYPE': 'SITETYPE', 'INSPIRE_ID': 'INSPIRE_ID', 'Area': 'Area', });
lyr_CropType_2021_poly_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Land_Nutzu': 'Land_Nutzu', });
lyr_Landscape2022_clipped_5.set('fieldAliases', {'name': 'name', 'Nr': 'Nr', 'Zusatz': 'Zusatz', 'Area': 'Area', 'BL': 'BL', });
lyr_non_res_suit_6.set('fieldAliases', {'fid': 'fid', 'value': 'value', 'area': 'area', 'layer': 'layer', 'path': 'path', 'Flaeche_ha': 'Flaeche_ha', 'Land_Nutzung': 'Land_Nutzung', 'APV_System': 'APV_System', 'Energieertrag-Bifaziale_MWh/Jahr': 'Energieertrag-Bifaziale_MWh/Jahr', 'Energieertrag_Monofaziale_MWh': 'Energieertrag_Monofaziale_MWh', 'Energieertrag_MWh/Jahr-Niedrig': 'Energieertrag_MWh/Jahr-Niedrig', 'Energieertrag_MWh/Jahr_High': 'Energieertrag_MWh/Jahr_High', 'Investitionskosten(1000€)': 'Investitionskosten(1000€)', });
lyr_Emmendingen_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'ID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', });
lyr_Protected_area_clipped_2.set('fieldImages', {'SITECODE': '', 'SITENAME': '', 'RELEASE_DA': '', 'MS': '', 'SITETYPE': '', 'INSPIRE_ID': '', 'name': '', 'Nr': '', 'Zusatz': '', 'Area': '', 'BL': '', 'LAND': '', 'MODELLART': '', 'OBJART': '', 'OBJART_TXT': '', 'OBJID': '', 'HDU_X': '', 'FDV_X': '', 'BEGINN': '', 'ENDE': '', 'OBJART_Z': '', 'OBJID_Z': '', 'FDV_Z_X': '', 'ADF': '', 'BEZ': '', 'FKT': '', 'NAM': '', 'NRS': '', 'NUM': '', 'RZS': '', 'SGN': '', 'ZON': '', 'ZUS': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Natur2000_2021_clipped_3.set('fieldImages', {'SITECODE': '', 'SITENAME': '', 'RELEASE_DA': '', 'MS': '', 'SITETYPE': '', 'INSPIRE_ID': '', 'Area': '', });
lyr_CropType_2021_poly_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Land_Nutzu': 'TextEdit', });
lyr_Landscape2022_clipped_5.set('fieldImages', {'name': 'TextEdit', 'Nr': 'TextEdit', 'Zusatz': 'TextEdit', 'Area': 'Range', 'BL': 'TextEdit', });
lyr_non_res_suit_6.set('fieldImages', {'fid': 'TextEdit', 'value': 'TextEdit', 'area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Flaeche_ha': 'TextEdit', 'Land_Nutzung': 'TextEdit', 'APV_System': 'TextEdit', 'Energieertrag-Bifaziale_MWh/Jahr': 'TextEdit', 'Energieertrag_Monofaziale_MWh': 'TextEdit', 'Energieertrag_MWh/Jahr-Niedrig': 'TextEdit', 'Energieertrag_MWh/Jahr_High': 'TextEdit', 'Investitionskosten(1000€)': 'TextEdit', });
lyr_Emmendingen_1.set('fieldLabels', {'ID_0': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'inline label - always visible', 'ID_1': 'hidden field', 'NAME_1': 'inline label - always visible', 'ID_2': 'hidden field', 'NAME_2': 'inline label - always visible', 'ID_3': 'hidden field', 'NAME_3': 'inline label - always visible', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'NL_NAME_3': 'hidden field', 'VARNAME_3': 'hidden field', });
lyr_Protected_area_clipped_2.set('fieldLabels', {'SITECODE': 'no label', 'SITENAME': 'no label', 'RELEASE_DA': 'no label', 'MS': 'no label', 'SITETYPE': 'no label', 'INSPIRE_ID': 'no label', 'name': 'no label', 'Nr': 'no label', 'Zusatz': 'no label', 'Area': 'no label', 'BL': 'no label', 'LAND': 'no label', 'MODELLART': 'no label', 'OBJART': 'no label', 'OBJART_TXT': 'no label', 'OBJID': 'no label', 'HDU_X': 'no label', 'FDV_X': 'no label', 'BEGINN': 'no label', 'ENDE': 'no label', 'OBJART_Z': 'no label', 'OBJID_Z': 'no label', 'FDV_Z_X': 'no label', 'ADF': 'no label', 'BEZ': 'no label', 'FKT': 'no label', 'NAM': 'no label', 'NRS': 'no label', 'NUM': 'no label', 'RZS': 'no label', 'SGN': 'no label', 'ZON': 'no label', 'ZUS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Natur2000_2021_clipped_3.set('fieldLabels', {'SITECODE': 'no label', 'SITENAME': 'no label', 'RELEASE_DA': 'no label', 'MS': 'no label', 'SITETYPE': 'no label', 'INSPIRE_ID': 'no label', 'Area': 'no label', });
lyr_CropType_2021_poly_4.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'inline label - always visible', });
lyr_Landscape2022_clipped_5.set('fieldLabels', {'name': 'no label', 'Nr': 'no label', 'Zusatz': 'no label', 'Area': 'no label', 'BL': 'no label', });
lyr_non_res_suit_6.set('fieldLabels', {'fid': 'hidden field', 'value': 'hidden field', 'area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Flaeche_ha': 'inline label - always visible', 'Land_Nutzung': 'inline label - always visible', 'APV_System': 'inline label - always visible', 'Energieertrag-Bifaziale_MWh/Jahr': 'inline label - always visible', 'Energieertrag_Monofaziale_MWh': 'inline label - always visible', 'Energieertrag_MWh/Jahr-Niedrig': 'inline label - always visible', 'Energieertrag_MWh/Jahr_High': 'inline label - always visible', 'Investitionskosten(1000€)': 'inline label - always visible', });
lyr_non_res_suit_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});