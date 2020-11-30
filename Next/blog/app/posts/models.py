from django.db import models
from django.utils import timezone

class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    author = models.CharField(max_length=255)
    created_at = models.DateTimeField(editable=False)

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = timezone.now()
        return super(Post, self).save(*args, **kwargs)
