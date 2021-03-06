/*
 * This is a basic func test for a Common application.
 */
YUI({
    useConsoleOutput: true,
    useBrowserConsole: true,
    logInclude: { TestRunner: true }
}).use('node', 'node-event-simulate', 'test', 'console', function (Y) {
   
    var suite = new Y.Test.Suite("Common: assetswithdefaultlocationclient");

    suite.add(new Y.Test.Case({

	    "test assetswithdefaultlocationclient": function() {
            var that = this;
            Y.one('#assets_default_button').simulate('click');
            that.wait(function(){
	            Y.one('#js1_button').simulate('click');
	            that.wait(function(){
		            Y.Assert.areEqual('I was appended by the recently added javascript file - js1.js.', Y.one('#para_node').get('innerHTML').match(/I was appended by the recently added javascript file - js1.js./gi));
                    Y.one('#js2_button').simulate('click');
		            that.wait(function(){
			            Y.Assert.areEqual('I was appended by the recently added javascript file - js2.js.', Y.one('#para_node').get('innerHTML').match(/I was appended by the recently added javascript file - js2.js./gi));
		            }, 4000);
	            }, 4000);           				
            }, 4000);
        }

     }));

     Y.Test.Runner.add(suite);

     function checkscript(mynode, assetLoc, assetTag, assetPat){
         var mystring;
         mynode.all(assetLoc).each(function (taskNode){
             var mysrc = taskNode.get(assetTag).match(assetPat);
             if(mysrc!=null){ mystring=mysrc; }   
         });
         return mystring;
     }
});