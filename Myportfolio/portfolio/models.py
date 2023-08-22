from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=64)
    description = models.TextField(null=True, blank=True)
    github_link = models.URLField(max_length=255)
    img = models.ManyToManyField('Photo', blank=True)
    
    def __str__(self):
        return f'Project: {self.title}'
    
    def imgUrl(self):
        imgs = list(self.img.all())
        length = len(imgs)
        for i in range(length):
            imgs[i] = 'http://127.0.0.1:8000/media/' + str(imgs[i])
        if length == 0:
            imgs.append('http://127.0.0.1:8000/media/uploads/default-image.png')
        return imgs


class Photo(models.Model):
    img = models.ImageField(upload_to='uploads/', default='uploads/default_img.png')

    def __str__(self):
        return f'{self.img}'
    
    
