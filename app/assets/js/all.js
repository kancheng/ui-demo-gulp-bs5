$(function() {
    console.log('Hello Bootstrap5');
});


if(document.getElementById("editor")){
    // 存在
    ClassicEditor
        .create(document.querySelector('#editor'))
        .then( editor => {
        console.log( editor );
    })
        .catch( error => {
        console.error( error );
    });
}