import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.lang.Math;
import java.awt.Graphics;

public class scripts implements MouseListener {
  
  public static void initializer() {
  
    //INPUT MOUNTAINS
    
    boolean mtnClick = false; 
    ArrayLyst<Image> mountains = new ArrayList<Image>();

    URL mtna = Paths.get("Visuals","Mountains1").toUri().toURL();
    URL mtnb = Paths.get("Visuals","Mountains2").toUri().toURL();
    URL mtnc = Paths.get("Visuals","Mountains3").toUri().toURL();
    URL mtnd = Paths.get("Visuals","Mountains4").toUri().toURL();

    ImageIcon mounta = new ImageIcon(mtna);
    Image mtn1 = mounta.getImage();
    mountains.add(mtn1);

    ImageIcon mountb = new ImageIcon(mtnb);
    Image mtn2 = mountb.getImage();
    mountains.add(mtn2);

    ImageIcon mountc = new ImageIcon(mtnc);
    Image mtn3 = mountc.getImage();
    mountains.add(mtn3);

    ImageIcon mountd = new ImageIcon(mtnd);
    Image mtn4 = mountd.getImage();
    mountains.add(mtn4);
  }
  
  private static void randomizer(String category) {
  //use random function to select a random-image, assoc boolean

    if(mountains.size() == 0) {
      initializer();
    }
  //if click=true and boolean==true, set boolean=false and put image on screen
    else if(category.equals("mountain")） {
       mtnClick = true; 
    }

  }
     @Override
     public void mouseClicked(MouseEvent arg0) { 
       if(mtnClick) {
         BufferedImage mtn = new BufferedImage(mtn1.getWidth(), mtn1.getHeight(), #00FFFFFF);
         
         draw(Graphics brush, mtn1);
       }
     }

     @Override
     public void mouseEntered(MouseEvent arg0) { }

     @Override
     public void mouseExited(MouseEvent arg0) { }

     @Override
     public void mousePressed(MouseEvent arg0) { }

     @Override
     public void mouseReleased(MouseEvent arg0) { }
            
     private void draw(Graphics brush, Image mtn1) {
       brush.drawImage(
     }

}
