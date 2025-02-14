from django.db import models


# Create your models here.
class ContactMessage(models.Model):
    name: models.CharField = models.CharField(max_length=200)
    email: models.EmailField = models.EmailField()
    message: models.TextField = models.TextField()
    sent_at: models.DateTimeField = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} ({self.email})"
