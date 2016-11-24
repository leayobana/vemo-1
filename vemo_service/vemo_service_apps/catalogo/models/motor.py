from uuid import uuid4
from django.db import models
#from .libro import Libro
# from .cliente import Cliente



class Motor(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)

    serie = models.CharField(max_length=60, blank=True, null=True)
    tipoMotor = models.CharField(max_length=60, blank=True, null=True)
    marca = models.CharField(max_length=60, blank=True, null=True)
    descripcion = models.CharField(max_length=60, blank=True, null=True)

    class Meta:
        verbose_name = "Motor"
        verbose_name_plural = "Motores"

    def __str__(self):
        return " %s " % (self.marca)
