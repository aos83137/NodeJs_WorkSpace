var formData = new FormData();
var xhr = new XMLHttpRequest();

formData.append('name', 'zerocho');
formData.append('item', 'orange');
formData.append('item', 'melon');
formData.has('item');
formData.has('money');
formData.get('item');
formData.getAll('item');
formData.append('test',['hi','zero']);
formData.get('test');
formData.set('item','apple');
formData.getAll('item');

xhr.onreadystatechange = function(){
    if(xhr.readyState === xhr.DONE){
        if(xhr.status === 200 || xhr.statu === 201){
            console.log(xhr.responseText);
        }else{
            console.error(xhr.responseText);
        }
    }
};
xhr.open('POST', 'http://www.zerocho.com/api/post/formdata');
xhr.send(formData);