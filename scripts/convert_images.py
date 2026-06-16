import os
from PIL import Image

def convert_to_webp(directory):
    originals_dir = os.path.join(directory, 'originals')
    if not os.path.exists(originals_dir):
        os.makedirs(originals_dir)
        
    for filename in os.listdir(directory):
        if filename.endswith(".png") or filename.endswith(".jpg") or filename.endswith(".jpeg"):
            filepath = os.path.join(directory, filename)
            
            # Avoid processing files that are already inside originals
            if os.path.isdir(filepath):
                continue
                
            img = Image.open(filepath)
            
            # Save original backup
            original_path = os.path.join(originals_dir, filename)
            if not os.path.exists(original_path):
                img.save(original_path)
            
            # Convert to webp
            webp_path = os.path.join(directory, os.path.splitext(filename)[0] + ".webp")
            
            # Optional: resize if the image is excessively large (e.g., > 2000px)
            # For logos, we just convert to WebP to maintain crispness but reduce size
            img.save(webp_path, 'webp', quality=85)
            print(f"Converted {filename} to WebP. Saved original in /originals")

if __name__ == "__main__":
    convert_to_webp("public")
