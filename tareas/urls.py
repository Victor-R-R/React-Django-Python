from django.urls import path
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tareas import views
from django.urls import include

router = routers.DefaultRouter()
router.register(r'tareas', views.TareaView, 'tareas')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title='Tareas API'))
]
