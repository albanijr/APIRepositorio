// JavaScript source code


async function getRepositorios(){
    const url = "https://api.github.com/search/repositories?q=stars:>0"
    const response = await fetch(url)
    const result = await response.json()
    var $table = $('#table')
    var data = []
    result.items.forEach(i=>{
        data.push({ 'fullname': i.full_name , 'href': i.html_url })
    })
    $table.bootstrapTable({data: data})
}