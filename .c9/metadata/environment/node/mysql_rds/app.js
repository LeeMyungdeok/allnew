{"changed":false,"filter":false,"title":"app.js","tooltip":"/node/mysql_rds/app.js","undoManager":{"mark":49,"position":49,"stack":[[{"start":{"row":3,"column":53},"end":{"row":3,"column":54},"action":"remove","lines":["."],"id":2},{"start":{"row":3,"column":52},"end":{"row":3,"column":53},"action":"remove","lines":["/"]},{"start":{"row":3,"column":51},"end":{"row":3,"column":52},"action":"remove","lines":["."]}],[{"start":{"row":3,"column":47},"end":{"row":3,"column":48},"action":"remove","lines":["."],"id":3}],[{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"remove","lines":["",""],"id":4},{"start":{"row":4,"column":1},"end":{"row":5,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":26,"column":21},"end":{"row":26,"column":25},"action":"remove","lines":["rows"],"id":5}],[{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"insert","lines":["r"],"id":6},{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":["o"]},{"start":{"row":26,"column":23},"end":{"row":26,"column":24},"action":"insert","lines":["w"]}],[{"start":{"row":26,"column":21},"end":{"row":26,"column":24},"action":"remove","lines":["row"],"id":7},{"start":{"row":26,"column":21},"end":{"row":26,"column":25},"action":"insert","lines":["rows"]}],[{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"remove","lines":["s"],"id":8}],[{"start":{"row":27,"column":48},"end":{"row":27,"column":49},"action":"remove","lines":["s"],"id":9}],[{"start":{"row":25,"column":18},"end":{"row":26,"column":27},"action":"insert","lines":["","            var template = "],"id":10,"ignore":true}],[{"start":{"row":26,"column":27},"end":{"row":27,"column":18},"action":"insert","lines":["`","                <`"],"id":11,"ignore":true}],[{"start":{"row":27,"column":16},"end":{"row":27,"column":17},"action":"remove","lines":["<"],"id":12,"ignore":true},{"start":{"row":27,"column":16},"end":{"row":55,"column":26},"action":"insert","lines":["<!doctype html>","        <html>","        <head>","            <title>Result</title>","            <meta charset=\"utf-8\">","            <link type=\"text/css\" rel=\"stylesheet\" href=\"mystyle.css\" />","        </head>","        <body>","        <table border=\"1\" style=\"margin:auto;\">","        <thead>","            <tr><th>User ID</th><th>Password</th></tr>","        </thead>","        <tbody>","        `;","        for (var i = 0; i < result.length; i++) {","            template += `","        <tr>","            <td>${result[i]['userid']}</td>","            <td>${result[i]['passwd']}</td>","        </tr>","        `;","        }","        template += `","        </tbody>","        </table>","        </body>","        </html>","        `;","        res.end(template);"]},{"start":{"row":56,"column":0},"end":{"row":57,"column":50},"action":"remove","lines":["            res.send(row);","            console.log('The solution is :', row);"]}],[{"start":{"row":54,"column":9},"end":{"row":54,"column":10},"action":"remove","lines":[";"],"id":13,"ignore":true}],[{"start":{"row":53,"column":15},"end":{"row":54,"column":9},"action":"remove","lines":["","        `"],"id":14,"ignore":true},{"start":{"row":53,"column":15},"end":{"row":54,"column":10},"action":"insert","lines":["","        `;"]}],[{"start":{"row":53,"column":15},"end":{"row":54,"column":9},"action":"remove","lines":["","        `"],"id":15,"ignore":true}],[{"start":{"row":53,"column":15},"end":{"row":54,"column":9},"action":"insert","lines":["","        `"],"id":16,"ignore":true},{"start":{"row":55,"column":26},"end":{"row":55,"column":27},"action":"remove","lines":["`"]},{"start":{"row":55,"column":26},"end":{"row":55,"column":27},"action":"insert","lines":["`"]}],[{"start":{"row":55,"column":26},"end":{"row":55,"column":27},"action":"remove","lines":["`"],"id":17,"ignore":true}],[{"start":{"row":27,"column":12},"end":{"row":27,"column":16},"action":"remove","lines":["    "],"id":18,"ignore":true}],[{"start":{"row":27,"column":8},"end":{"row":27,"column":12},"action":"remove","lines":["    "],"id":19,"ignore":true}],[{"start":{"row":41,"column":28},"end":{"row":41,"column":34},"action":"remove","lines":["result"],"id":20,"ignore":true},{"start":{"row":41,"column":28},"end":{"row":41,"column":31},"action":"insert","lines":["row"]},{"start":{"row":44,"column":18},"end":{"row":44,"column":24},"action":"remove","lines":["result"]},{"start":{"row":44,"column":18},"end":{"row":44,"column":21},"action":"insert","lines":["row"]},{"start":{"row":45,"column":18},"end":{"row":45,"column":24},"action":"remove","lines":["result"]},{"start":{"row":45,"column":18},"end":{"row":45,"column":21},"action":"insert","lines":["row"]}],[{"start":{"row":45,"column":40},"end":{"row":46,"column":40},"action":"insert","lines":["","            <td>${row[i]['passwd']}</td>"],"id":21,"ignore":true}],[{"start":{"row":44,"column":26},"end":{"row":44,"column":32},"action":"remove","lines":["userid"],"id":22,"ignore":true},{"start":{"row":44,"column":26},"end":{"row":44,"column":28},"action":"insert","lines":["ID"]}],[{"start":{"row":45,"column":26},"end":{"row":45,"column":32},"action":"remove","lines":["passwd"],"id":23,"ignore":true},{"start":{"row":45,"column":26},"end":{"row":45,"column":30},"action":"insert","lines":["Name"]},{"start":{"row":46,"column":26},"end":{"row":46,"column":32},"action":"remove","lines":["passwd"]},{"start":{"row":46,"column":26},"end":{"row":46,"column":30},"action":"insert","lines":["Dept"]}],[{"start":{"row":37,"column":16},"end":{"row":37,"column":23},"action":"insert","lines":["<th>ID "],"id":24,"ignore":true}],[{"start":{"row":37,"column":22},"end":{"row":37,"column":23},"action":"remove","lines":[" "],"id":25,"ignore":true},{"start":{"row":37,"column":26},"end":{"row":37,"column":33},"action":"remove","lines":["User ID"]},{"start":{"row":37,"column":26},"end":{"row":37,"column":30},"action":"insert","lines":["Name"]}],[{"start":{"row":37,"column":39},"end":{"row":37,"column":47},"action":"remove","lines":["Password"],"id":26,"ignore":true},{"start":{"row":37,"column":39},"end":{"row":37,"column":43},"action":"insert","lines":["Dept"]}],[{"start":{"row":44,"column":26},"end":{"row":44,"column":28},"action":"remove","lines":["ID"],"id":27,"ignore":true},{"start":{"row":44,"column":26},"end":{"row":44,"column":31},"action":"insert","lines":["ST_ID"]},{"start":{"row":45,"column":26},"end":{"row":45,"column":30},"action":"remove","lines":["Name"]},{"start":{"row":45,"column":26},"end":{"row":45,"column":30},"action":"insert","lines":["NAME"]}],[{"start":{"row":46,"column":26},"end":{"row":46,"column":30},"action":"remove","lines":["Dept"],"id":28,"ignore":true},{"start":{"row":46,"column":26},"end":{"row":46,"column":30},"action":"insert","lines":["DEPT"]}],[{"start":{"row":56,"column":26},"end":{"row":57,"column":0},"action":"remove","lines":["",""],"id":29},{"start":{"row":56,"column":25},"end":{"row":56,"column":26},"action":"remove","lines":[";"]}],[{"start":{"row":56,"column":25},"end":{"row":56,"column":26},"action":"insert","lines":[";"],"id":30}],[{"start":{"row":22,"column":10},"end":{"row":22,"column":11},"action":"insert","lines":["a"],"id":31}],[{"start":{"row":22,"column":10},"end":{"row":22,"column":11},"action":"remove","lines":["a"],"id":32}],[{"start":{"row":56,"column":8},"end":{"row":56,"column":11},"action":"insert","lines":["// "],"id":33}],[{"start":{"row":56,"column":8},"end":{"row":56,"column":11},"action":"remove","lines":["// "],"id":34}],[{"start":{"row":56,"column":12},"end":{"row":56,"column":13},"action":"insert","lines":["s"],"id":35}],[{"start":{"row":56,"column":15},"end":{"row":56,"column":16},"action":"remove","lines":["d"],"id":36},{"start":{"row":56,"column":14},"end":{"row":56,"column":15},"action":"remove","lines":["n"]},{"start":{"row":56,"column":13},"end":{"row":56,"column":14},"action":"remove","lines":["e"]},{"start":{"row":56,"column":12},"end":{"row":56,"column":13},"action":"remove","lines":["s"]},{"start":{"row":56,"column":11},"end":{"row":56,"column":12},"action":"remove","lines":["."]}],[{"start":{"row":56,"column":11},"end":{"row":56,"column":12},"action":"insert","lines":["."],"id":37}],[{"start":{"row":56,"column":12},"end":{"row":56,"column":16},"action":"insert","lines":["send"],"id":38}],[{"start":{"row":56,"column":12},"end":{"row":56,"column":16},"action":"remove","lines":["send"],"id":39},{"start":{"row":56,"column":12},"end":{"row":56,"column":13},"action":"insert","lines":["e"]}],[{"start":{"row":56,"column":12},"end":{"row":56,"column":13},"action":"remove","lines":["e"],"id":40}],[{"start":{"row":56,"column":12},"end":{"row":56,"column":13},"action":"insert","lines":["e"],"id":41},{"start":{"row":56,"column":13},"end":{"row":56,"column":14},"action":"insert","lines":["n"]},{"start":{"row":56,"column":14},"end":{"row":56,"column":15},"action":"insert","lines":["d"]}],[{"start":{"row":56,"column":8},"end":{"row":56,"column":26},"action":"remove","lines":["res.end(template);"],"id":42}],[{"start":{"row":56,"column":4},"end":{"row":56,"column":8},"action":"remove","lines":["    "],"id":43},{"start":{"row":56,"column":0},"end":{"row":56,"column":4},"action":"remove","lines":["    "]},{"start":{"row":55,"column":10},"end":{"row":56,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":58,"column":9},"end":{"row":59,"column":0},"action":"insert","lines":["",""],"id":44},{"start":{"row":59,"column":0},"end":{"row":59,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":59,"column":8},"end":{"row":59,"column":26},"action":"insert","lines":["res.end(template);"],"id":45}],[{"start":{"row":59,"column":8},"end":{"row":59,"column":26},"action":"remove","lines":["res.end(template);"],"id":46}],[{"start":{"row":55,"column":10},"end":{"row":56,"column":0},"action":"insert","lines":["",""],"id":47},{"start":{"row":56,"column":0},"end":{"row":56,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":56,"column":8},"end":{"row":56,"column":26},"action":"insert","lines":["res.end(template);"],"id":48}],[{"start":{"row":24,"column":8},"end":{"row":24,"column":11},"action":"insert","lines":["// "],"id":49}],[{"start":{"row":24,"column":8},"end":{"row":24,"column":11},"action":"remove","lines":["// "],"id":50}],[{"start":{"row":24,"column":8},"end":{"row":24,"column":11},"action":"insert","lines":["// "],"id":51}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":23,"column":64},"end":{"row":23,"column":64},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1687328274199}