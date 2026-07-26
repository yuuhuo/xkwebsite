from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Profile(models.Model):
    name = models.CharField(max_length=120)
    avatar = models.ImageField(upload_to="profiles/", blank=True)
    bio = models.TextField(blank=True)
    slogan = models.CharField(max_length=200, blank=True)
    email = models.EmailField(blank=True)
    github = models.URLField(blank=True)
    social = models.CharField(max_length=200, blank=True)
    owner = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="profile",
        null=True,
        blank=True,
    )
    updated_time = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profile"

    def __str__(self) -> str:
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=200)
    cover = models.ImageField(upload_to="projects/", blank=True)
    description = models.TextField()
    technology = models.CharField(max_length=300, blank=True)
    github = models.URLField(blank=True)
    date = models.DateField(null=True, blank=True)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-date", "-created_time"]
        verbose_name = "Project"
        verbose_name_plural = "Project"

    def __str__(self) -> str:
        return self.title


class Blog(models.Model):
    class Category(models.TextChoices):
        RESEARCH = "research", "科研"
        TECHNOLOGY = "technology", "技术"
        LITERATURE = "literature", "文学"
        SPORTS = "sports", "体育"

    title = models.CharField(max_length=200)
    content = models.TextField()
    category = models.CharField(
        max_length=20,
        choices=Category.choices,
        default=Category.TECHNOLOGY,
    )
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_time"]
        verbose_name = "Blog"
        verbose_name_plural = "Blog"

    def __str__(self) -> str:
        return self.title


class Gallery(models.Model):
    image = models.ImageField(upload_to="gallery/")
    description = models.TextField(blank=True)
    date = models.DateField(null=True, blank=True)
    created_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-date", "-created_time"]
        verbose_name = "Gallery"
        verbose_name_plural = "Gallery"

    def __str__(self) -> str:
        return self.description[:40] or f"Gallery #{self.pk}"
