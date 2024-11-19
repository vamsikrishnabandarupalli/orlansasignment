import tkinter as tk
from tkinter import filedialog, messagebox, ttk

def submit_form():
    name = name_entry.get()
    age = age_var.get()
    file_name = file_var.get()
    if not name or not age:
        messagebox.showwarning("Input Error", "Please complete all fields.")
        return 
    else:
        messagebox.showinfo("Form Submitted", f"Name: {name}\nAge: {age}\nFile: {file_name or 'None'}")

def upload_file():
    file_path = filedialog.askopenfilename()
    if file_path:
        file_var.set(file_path.split("/")[-1])

# Main Window
root = tk.Tk()
root.title("Healthcare Dashboard")
root.geometry("400x350")
root.configure(bg="#f0f4f8")

# Styles
style = ttk.Style()
style.configure("TButton", font=("Arial", 12))
style.configure("TLabel", font=("Arial", 12))

# Title
title_label = ttk.Label(root, text="Healthcare Dashboard", font=("Arial", 16, "bold"), background="#f0f4f8")
title_label.pack(pady=10)

# Name Field
ttk.Label(root, text="Name:", background="#f0f4f8").pack(pady=5)
name_entry = ttk.Entry(root, font=("Arial", 12))
name_entry.pack(pady=5, padx=20, fill="x")

# Age Dropdown
ttk.Label(root, text="Age:", background="#f0f4f8").pack(pady=5)
age_var = tk.StringVar()
age_dropdown = ttk.Combobox(root, textvariable=age_var, font=("Arial", 12), state="readonly")
age_dropdown["values"] = [str(i) for i in range(1, 101)]
age_dropdown.pack(pady=5, padx=20, fill="x")

# File Upload
file_var = tk.StringVar()
upload_button = ttk.Button(root, text="Upload File", command=upload_file)
upload_button.pack(pady=10)
file_label = ttk.Label(root, textvariable=file_var, background="#f0f4f8")
file_label.pack()

# Submit Button
submit_button = ttk.Button(root, text="Submit", command=submit_form)
submit_button.pack(pady=20)

root.mainloop()
