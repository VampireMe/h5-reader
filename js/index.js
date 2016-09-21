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

    };
    var Win = $(window);
    var Doc = $(document);

    /**
     * the entance port for project
     */
    function main() {
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