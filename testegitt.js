import tkinter as tk
from tkinter import messagebox

class App:
    def __init__(self, root):
        self.root = root
        self.root.title("Programa em POO com Janela")
        self.root.geometry("400x300")

        
        self.label = tk.Label(root, text="Digite algo:", font=("Arial", 12))
        self.label.pack(pady=10)

        self.entry = tk.Entry(root, width=30, font=("Arial", 12))
        self.entry.pack(pady=10)

        
        self.show_button = tk.Button(root, text="Exibir Texto", command=self.show_text, font=("Arial", 12))
        self.show_button.pack(pady=10)

        self.clear_button = tk.Button(root, text="Limpar", command=self.clear_text, font=("Arial", 12))
        self.clear_button.pack(pady=10)

        
        self.display_label = tk.Label(root, text="", font=("Arial", 12), fg="blue")
        self.display_label.pack(pady=20)

    def show_text(self):
        
        text = self.entry.get()
        if text.strip():
            self.display_label.config(text=f"Você digitou: {text}")
        else:
            messagebox.showwarning("Aviso", "Por favor, digite algo no campo.")

    def clear_text(self):
        
        self.entry.delete(0, tk.END)
        self.display_label.config(text="")


if __name__ == "__main__":
    root = tk.Tk()
    app = App(root)
    root.mainloop()

