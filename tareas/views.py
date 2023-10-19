from rest_framework import viewsets
from .serializer import TareaSerializer
from .models import Tarea


# Create your views here.
class TareaView(viewsets.ModelViewSet):
    serializer_class = TareaSerializer
    queryset = Tarea.objects.all()
