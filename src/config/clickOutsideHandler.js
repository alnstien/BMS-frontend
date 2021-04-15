
const clickOutside=(ref,func,hook)=>{
    func(()=>{
        let handler =(e)=>{
            if(ref.current===undefined){
                return
            }else{
                 if(!ref.current.contains(e.target)){
                hook(false);
                }
            }  
        }
        document.addEventListener("mousedown",handler);

        return()=>{
            document.removeEventListener("mousedown",handler);
        }
    })
}

export default clickOutside;