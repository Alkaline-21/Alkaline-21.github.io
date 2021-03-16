import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.lang.Math;

public class scripts {
  
  public static void initializer() {
  
    boolean isClicked = false; 
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
  
  public static void randomizer(String category) {
  //use random function to select a random-image, assoc boolean

  //if click=true and boolean==true, set boolean=false and put image on screen
    isClicked = true; 
    
    

  }

}
