class tete extends Entity{
    constructor(xp, yp, score = undefined){
       super(xp, yp, gTextures["tete"])
       if (score != undefined) {
        this.score = score
    }
        this.speed= 45
        this.dx = random(10,25)
        this.dy = random(10,25)
        this.gameover = 0
        this.image = image 
        this.image = gTextures["tete"]
      }
      
       update(dt) {
           super.update(dt)
   
          this.x += this.dx * dt
   
          this.y += this.dy * dt
   
           if (this.getLeft() < 0){
               this.setLeft(0)
               this.stop()
               this.isGameOver()

           }
        
           if (this.getRight() >900){
               this.setRight(900)
               this.stop()
               this.isGameOver()
            }
           
           if (this.getTop() < 0){
                this.setTop(0)
                this.stop()
                this.isGameOver()
            }
   
           if (this.getBottom() > 700){
                this.setBottom(700)
                this.stop()
                this.isGameOver()
            }
       }

       move(direction) {
   
        switch (direction){

            case "LEFT":
                this.dx = -this.speed 
                this.dy = 0
                this.image = gTextures["tete"]
                break
    
            case "RIGHT":
                this.dx = 2*this.speed
                this.dy = 0
                this.image = gTextures["teteL"]
                break
            
    
            case "DOWN":
                this.dy = 2*this.speed  
                this.dx = 0
                this.image = gTextures["teteU"]
                break
    
            case "UP":
                this.dy = -this.speed
                this.dx = 0
                this.image = gTextures["teteD"]
                break

           default:
           break
            } 
        }

        isGameOver(){
            this.gameover = 1
            this.score.decrementsLives()
            this.setLeft(450)
            this.setTop(350)
        }


       render() {
   
           super.render()
           super.renderDebug()
   
   
       }
       
   stop() {
       this.dx=0
       this.dy = 0
   }

   } 


   
   class pomme extends Entity {

    constructor(tete,score = undefined) {
        super(random(CANVAS_WIDTH), random(CANVAS_HEIGHT), gTextures["pomme"],18,18)
        this.tete = tete

        if (score != undefined) {
            this.score = score
        }
       

    }

    stop() {
        this.dx = random(CANVAS_WIDTH)
        this.dy = random(CANVAS_HEIGHT)
    }

    update(dt) {
        super.update(dt)
       this.isCollision()
       
    }
isCollision(){
    if (this.collides(this.tete)){
        this.score.incrementsPoints(0.5)
        gSounds["bip"].play()
        this.x = random(CANVAS_WIDTH)
        this.y = random(CANVAS_HEIGHT)
    }

}


    render() {
        

        super.render()

        super.renderDebug()
    }
}