/**
 * Created by gaoqing on 2016/9/22.
 */

(function () {
    var Util = (function () {
        var prefix = 'html5_reader_';
        var StorageGetter = function (key) {
            return localStorage.getItem(prefix + key);
        };
        var StorageSetter = function (key, val) {
            return localStorage.setItem(prefix + key, val);
        };
        return {
            StorageGetter: StorageGetter,
            StorageSetter: StorageSetter
        }
    })();

    var Dom = {
        top_nav: $("#top-nav"),
        bottom_nav: $("#bottom-nav"),
        menu_nav: $("#menu-nav"),
        fiction_container: $("#fiction_container")

    };
    var Win = $(window);
    var Doc = $(document);
    var fontSize = Util.StorageGetter("fontSize") || 14;

    function init(fontSize) {
        Dom.fiction_container.css('font-size', fontSize + "px");
    }

    /**
     * the entance port for project
     */
    function main() {
        init(fontSize);
        EventHandler();
    }

    /**
     * get data from server
     */
    function ReadModel() {

    }

    /**
     * render the basic UI
     */
    function ReaderBaseFrame() {

    }

    /**
     * event handle method
     */
    function EventHandler() {

        $("#action_mid").click(function () {
            $(Dom.bottom_nav).toggle();
            $(Dom.top_nav).toggle();
            hide_font_panel();
        });

        $("#night-button").click(function () {
            
        });

        $("#font-button").click(function () {
            show_font_panel();
        });

        $("#large-font").click(function () {
            if (fontSize >= 20){
                return;
            }
            fontSize++;
            Dom.fiction_container.css('font-size', fontSize + "px");
            Util.StorageSetter('fontSize', fontSize);
        });
        $("#small-font").click(function () {
            if (fontSize <= 12){
                return;
            }
            fontSize--;
            Dom.fiction_container.css('font-size', fontSize + "px");
            Util.StorageSetter('fontSize', fontSize);
        });

        Win.scroll(function () {
            $(Dom.bottom_nav).hide();
            $(Dom.top_nav).hide();
            hide_font_panel();
        });
        
    }
    
    function show_font_panel() {
        $("#font-button").addClass('icon-font-cur');
        Dom.menu_nav.show();
    }
    
    function hide_font_panel() {
        $("#font-button").removeClass('icon-font-cur');
        $(Dom.menu_nav).hide();
    }

    main();




})();