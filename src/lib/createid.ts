let id: number = parseInt(window.localStorage.getItem('idMax') || '0' ) || 0;

function createId(){
    id++ ;
    window.localStorage.setItem('_idMax',id.toString()); //把id存到localStorage
    return id;
}

export default createId