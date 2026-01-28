from PIL import Image
import os

img_path = r'c:\Users\jaste\Desktop\Antigravity research folders\AI Automation\website\public\Images\CaseStudies\td_bank_triple_mockup.png'
save_path = r'c:\Users\jaste\Desktop\Antigravity research folders\AI Automation\website\public\Images\CaseStudies\td_bank_single_mockup.png'

if os.path.exists(img_path):
    img = Image.open(img_path)
    width, height = img.size
    # Crop to the first phone (roughly left 1/3)
    # Let's be a bit more precise if there is padding.
    # Usually these mockups have equal spacing.
    left = 0
    top = 0
    right = width // 3
    bottom = height
    
    # Let's adjust to crop the phone more tightly if needed, 
    # but the user said "first image of the three phone mockup", 
    # which usually means the whole first mockup block.
    
    cropped = img.crop((left, top, right, bottom))
    cropped.save(save_path)
    print(f"Saved cropped image to {save_path}")
else:
    print(f"File not found: {img_path}")
