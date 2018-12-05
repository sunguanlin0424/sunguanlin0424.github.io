$(document).ready(function(){


    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appnz0jma5BilSbeD/%E6%99%AF%E7%82%B9?api_key=key0eGGPlI2X82Vz3";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.Name);
                       items.push(value.fields.Stage_Desc);
                       items.push(value.fields.Completed);
                       items.push(value.fields.Time_Estimate);
                       items.push(value.fields.Weight_Factor);
                       items.push(value.fields.converted);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#example').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Name",
                       defaultContent:""},
                     { title: "Stage",
                         defaultContent:"" },
                     { title: "Completed",
                       defaultContent:"" },
                     { title: "Time Estimated",
                       defaultContent:""},
                     { title: "Weight Factor",
                         defaultContent:""},
                     { title: "Converted",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

     $("button#roll_up").click(function() {
       var table1_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appJa4i7xGh9cKKJi/Table%201?api_key=key0eGGPlI2X82Vz3";
       var table1_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table1_items = [];
                      table1_items.push(value.fields.名称);
                      table1_items.push(value.fields.省份);
                      table1_items.push(value.fields.城市);
                      table1_items.push(value.fields.用时参考);
                      table1_items.push(value.fields.建议游玩时间);
                  
                      table1_dataSet.push(table1_items);
                      console.log(table1_items);
               }); // end .each
               console.log(table1_dataSet);

            $('#table1').DataTable( {
                data: table1_dataSet,
                retrieve: true,
                columns: [
                    { title: "名称",
                      defaultContent:""},
                    { title: "省份",
                        defaultContent:"" },
                    { title: "城市",
                      defaultContent:"" },
                    { title: "用时参考",
                      defaultContent:""},
                    { title: "建议游玩时间",
                        defaultContent:""},
                  
                ]
            } );
       }); // end .getJSON

         var table2_items = [];
         var i = 0;
         var airtable_read_endpoint =
         "https://api.airtable.com/v0/appJa4i7xGh9cKKJi/Table%201?api_key=key0eGGPlI2X82Vz3";
         var table2_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table2_items = [];
                        table2_items.push(value.fields.城市);
                        table2_items.push(value.fields.景点数量);
                        table2_dataSet.push(table2_items);
                        console.log(table2_items);
                 }); // end .each
                 console.log(table2_dataSet);
                $('#table2').DataTable( {
                    data: table2_dataSet,
                    retrieve: true,
                    ordering: false,
                    columns: [
                        { title: "城市",
                          defaultContent:""},
                        { title: "景点数量",
                          defaultContent:""},
                    ] // rmf columns
                } ); // end dataTable

                var chart = c3.generate({
                     data: {
                         columns: table1_dataSet,
                         type : 'bar'
                     },
                     axis: {
                       x: {label: '城市'},
                       y: {label: '景点数量'}
                     },
                     bar: {
                         title: "Tasks for Each Stage:",
                     }
                 });

          }); // end .getJSON
       }); // end button

        // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {

}); // document ready