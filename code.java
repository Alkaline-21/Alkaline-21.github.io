import java.io.*;
import java.util.ArrayList;
import java.lang.Math;
import java.awt.Graphics2D;
import java.awt.event.MouseEvent;
import java.awt.Image;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.awt.Point;
import java.awt.PointerInfo;
import java.awt.MouseInfo;
import java.applet.*;

public class mtnSelector extends Applet {
	static boolean mtnClick = false;
	static ArrayList<Image> mountains = new ArrayList<Image>();

	public mtnSelector() {
		try {
			Image mtn1 = ImageIO.read(new FileInputStream("C:\\Windows\\system32>\\Desktop\\Application\\Visuals\\Mountains1.jpg"));	  
			Image mtn2 = ImageIO.read(new FileInputStream("C:\\Windows\\system32>\\Desktop\\Application\\Visuals\\Mountains2.jpg"));	  
			Image mtn3 = ImageIO.read(new FileInputStream("C:\\Windows\\system32>\\Desktop\\Application\\Visuals\\Mountains3.jpg"));	  
			Image mtn4 = ImageIO.read(new FileInputStream("C:\\Windows\\system32>\\Desktop\\Application\\Visuals\\Mountains4.jpg"));	  

			mountains.add(mtn1);
			mountains.add(mtn2);
			mountains.add(mtn3);
			mountains.add(mtn4);
		} catch (IOException e) {
		}
	}
		
	private static void randomizer(String category) {

		if(category.equals("mountain")) {
			mtnClick = true; 
		}else if(category.equals("arrow")) {
			mtnClick = false;
		}
	}

	public void mouseClicked(MouseEvent arg0) { 
		if(mtnClick) {
			PointerInfo a = MouseInfo.getPointerInfo();
			Point b = a.getLocation();
			int x = (int) b.getX();
			int y = (int) b.getY(); 
			
			BufferedImage buff = (BufferedImage) mountains.get(0);
			Graphics2D toGraphics = buff.createGraphics();

			toGraphics.drawImage(mountains.get(0), x, y, null);
		}
	}

     public void mouseEntered(MouseEvent arg0) { }

     public void mouseExited(MouseEvent arg0) { }

     public void mousePressed(MouseEvent arg0) { }

     public void mouseReleased(MouseEvent arg0) { }

}
