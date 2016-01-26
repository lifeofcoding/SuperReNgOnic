angular
    .module('main')
    .controller('MainController', function(supersonic) {
        this.showDrawer = function() {
            supersonic.ui.drawers.open('left').then(function() {
                supersonic.logger.debug("Drawer was shown");
            });
        };

        function getUrlParts(url) {
            var a = document.createElement('a');
            a.href = url;

            return {
                href: a.href,
                host: a.host,
                hostname: a.hostname,
                port: a.port,
                pathname: a.pathname,
                protocol: a.protocol,
                hash: a.hash,
                search: a.search
            };
        }

        supersonic.logger.debug("Relative url:");
        supersonic.logger.debug(getUrlParts('/icons/bars.png'));
    }
);
