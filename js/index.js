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
        fiction_container: $("#fiction_container"),
        hbody: $("body")

    };
    var Win = $(window);
    var Doc = $(document);
    var fontSize = Util.StorageGetter("fontSize") || 14;
    var bg = Util.StorageGetter("bg") || "#E9DFC7";

    function init(fontSize) {
        Dom.fiction_container.css('font-size', fontSize + "px");
        Dom.hbody.css('background', bg);
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

        change_bg('bk-container');
        change_bg('bk-container-snow');
        change_bg('bk-container-grey');
        change_bg('bk-container-green');

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
    
    function change_bg(class_name) {
        $("." + class_name).click(function () {
            Dom.hbody.css('background', $(this).attr('data-id'));
            Util.StorageSetter('bg', $(this).attr('data-id'));
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