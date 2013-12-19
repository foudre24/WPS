/**
 * Config file for requireJs
 */
requirejs.config({
	paths: {
		'underscore': 'vendor/underscore-min',
		'jquery': 'vendor/jquery-2.0.3.min',
		'SVG': 'svg/SVG'
	},
	config: {
		'WPS/WPSManager': {
			'url-proxy': 'http://localhost/wps/lib/proxy.php?url={url}',
		},
		'WPS/WPSServers': {
			'wps-server': 'http://localhost/wps/lib/serveurs.json'
		}
	}

});

/**
 TODO: 
 [x] Ajout des serveurs
 [ ] Export vers un fichier XML
 [ ] Hover sur le titre du input pour afficher le type
 [ ] afficher info du point de sortie
 [ ] Bug buffer x2
 [ ] Meilleur gestion des littéraux (string-choice, xs:...)
 [ ] Vérifier le minOccurs/maxOccurs
 [ ] Supprimer process et pas que les box!
 [ ] Vérifier qu'un serveur n'apparait pas deux fois dans la liste
 [ ] Dépédance de SVG problématique
*/

/**
 * Main module. Call the render methode from the view.
 */
require(['view'], function(view) {
	view.render();
})