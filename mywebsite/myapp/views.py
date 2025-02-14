from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.contrib import messages
from django.conf import settings
from .models import ContactMessage
import os

# Create your views here.


def home(request):
    return render(request, "home.html")


def about(request):
    return render(request, "about.html")


def projects(request):
    return render(request, "projects.html")


def skills(request):
    return render(request, "skills.html")


def blog(request):
    return render(request, "blog.html")


def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        contact_entry = ContactMessage.objects.create(
            name=name, email=email, message=message
        )

        subject = f"New Message from {name}"
        body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
        sender_email = email
        recipient_list = [os.getenv("ADMIN_EMAIL")]

        try:
            send_mail(subject, body, sender_email, recipient_list)
            messages.success(
                request, "Your message has been saved and sent successfully"
            )
        except Exception as e:
            messages.error(request, f"Error sending email: {str(e)}")

        return redirect("contact")
    return render(request, "contact.html")
