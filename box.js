/*AFRAME.registerComponent("move-box",{
schema:{
    moveX:{type:"number",default:1},
},
tick:function(){
    this.data.moveX=this.data.moveX+0.01;
    var pos=this.el.getAttribute('position');
    pos.x=this.data.moveX;
    this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
}

})*/
AFRAME.registerComponent("rotate-box",{
    schema:{
        moveX:{type:"number",default:1},
    },
    tick:function(){
        this.data.moveX=this.data.moveX+5 ;
        var pos=this.el.getAttribute('rotation');
        pos.x=this.data.moveX;
        pos.y=this.data.moveX
        this.el.setAttribute("rotation",{x:pos.x,y:pos.y,z:pos.z})
    }})


