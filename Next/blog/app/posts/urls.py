from django.urls import path

from .views import PostList, PostDetail

urlpatterns = [
    path("posts/", PostList.as_view(), name="posts_list"),
    path("posts/<int:pk>/", PostDetail.as_view(), name="posts_detail")
]