
YUI.add('PageLayout-tests', function (Y) {

    var suite = new YUITest.TestSuite('PageLayout-tests'),
        controller = null,
        A = YUITest.Assert;

    suite.add(new YUITest.TestCase({

        name: 'PageLayout user tests',

        setUp: function () {
            controller = Y.mojito.controllers.PageLayout;
        },
        tearDown: function () {
            controller = null;
        },

        'test mojit PageLayout 001': function () {
            var ac,
                modelData,
                assetsResults,
                doneResults,
                route_param,
                def_value;
            ac = {
                assets: {
                    addCss: function (css) {
                        assetsResults = css;
                    }
                },
                config: {
                    getDefinition: function (key) {
                        def_value = key;
                    }
                },
                helpers: {
                    expose: function(func_name, func) {
                        //Y.bind(func_name, func);
                    }
                },
                intl: {
                    lang: function (str) {
                        A.areEqual("YUITitle", str);
                    }
                },
                params: {
                    getFromRoute: function (param) {
                        route_param = param;
                        return "yui";
                    }
                },
                composite: {
                    done: function (data) {
                        doneResults = data;
                    }
                }
            };

            A.isNotNull(controller);
            A.isFunction(controller.init);
            controller.init({});

            A.isFunction(controller.index);
            controller.index(ac);
            A.isNotNull(route_param);
            A.isObject(doneResults);
        },

        'test mojit PageLayout 002': function () {
            var ac,
                modelData,
                assetsResults,
                doneResults,
                route_param,
                def_value;
            ac = {
                assets: {
                    addCss: function (css) {
                        assetsResults = css;
                    }
                },
                config: {
                    getDefinition: function (key) {
                        def_value = key;
                    }
                },
                helpers: {
                    expose: function(func_name, func) {
                        //Y.bind(func_name, func);
                    }
                },
                intl: {
                    lang: function (str) {
                        A.areEqual("MojitoTitle", str);
                    }
                },
                params: {
                    getFromRoute: function (param) {
                        route_param = param;
                        return "mojito";
                    }
                },
                composite: {
                    done: function (data) {
                        doneResults = data;
                    }
                }
            };
            A.isNotNull(controller);
            A.isFunction(controller.index);
            controller.index(ac);
            A.isNotNull(route_param);
            A.isObject(doneResults);
        }
    }));
    YUITest.TestRunner.add(suite);

}, '0.0.1', {requires: ['mojito-test', 'PageLayout']});
