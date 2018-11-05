$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appNDGawIMjkwLchf/%E7%8B%97%E7%8B%97?maxRecords=3&view=Grid%20view";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.名稱);
                       items.push(value.fields.體型);
                       items.push(value.fields.智商);
                       items.push(value.fields.親和度);
                       items.push(value.fields.種類);
                       items.push(value.fields.預期壽命);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#example').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "名稱",
                       defaultContent:""},
                     { title: "體型",
                         defaultContent:"" },
                     { title: "智商",
                       defaultContent:"" },
                     { title: "親和度",
                       defaultContent:""},
                     { title: "種類",
                         defaultContent:""},
                     { title: "預期壽命",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

     $("button#roll_up").click(function() {
       var table1_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appNDGawIMjkwLchf/%E7%8B%97%E7%8B%97?maxRecords=3&view=Grid%20view";
       var table1_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table1_items = [];
                      table1_items.push(value.fields.名稱);
                      table1_items.push(value.fields.體型);
                      table1_items.push(value.fields.智商);
                      table1_items.push(value.fields.親和度);
                      table1_items.push(value.fields.種類);
                      table1_items.push(value.fields.預期壽命);
                      table1_dataSet.push(table1_items);
                      console.log(table1_items);
               }); // end .each
               console.log(table1_dataSet);

            $('#table1').DataTable( {
                data: table1_dataSet,
                retrieve: true,
                columns: [
                    { title: "名稱",
                      defaultContent:""},
                    { title: "體型",
                        defaultContent:"" },
                    { title: "智商",
                      defaultContent:"" },
                    { title: "親和度",
                      defaultContent:""},
                    { title: "種類",
                        defaultContent:""},
                    { title: "預期壽命",
                      defaultContent:""},
                ]
            } );
       }); // end .getJSON

         var table2_items = [];
         var i = 0;
         var airtable_read_endpoint =
         "https://api.airtable.com/v0/appNDGawIMjkwLchf/%E7%8B%97%E7%8B%97?api_key=key0eGGPlI2X82Vz3";
         var table2_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table2_items = [];
                        table2_items.push(value.fields.名稱);
                        table2_items.push(value.fields.預期壽命);
                        table2_dataSet.push(table2_items);
                        console.log(table2_items);
                 }); // end .each
                 console.log(table2_dataSet);
                $('#table2').DataTable( {
                    data: table2_dataSet,
                    retrieve: true,
                    ordering: false,
                    columns: [
                        { title: "名稱",
                          defaultContent:""},
                        { title: "預期壽命",
                          defaultContent:""},
                    ] // rmf columns
                } ); // end dataTable

                var chart = c3.generate({
                     data: {
                         columns: table2_dataSet,
                         type : 'bar'
                     },
                     axis: {
                       x: {label: 'Stage'},
                       y: {label: '# of Entries'}
                     },
                     bar: {
                         title: "Tasks for Each Stage:",
                     }
                 });

          }); // end .getJSON
       }); // end button

        // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {

}); // document ready
