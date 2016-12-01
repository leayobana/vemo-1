from uuid import uuid4
from django.db import models
#from .libro import Libro
# from .cliente import Cliente



class Repuesto(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)

    nombre = models.CharField(max_length=60, blank=True, null=True)
    codigo = models.CharField(max_length=60, blank=True, null=True)
    descripcion = models.CharField(max_length=60, blank=True, null=True)

    class Meta:
        verbose_name = "Repuesto"
        verbose_name_plural = "Repuestos"

    def __str__(self):
        return " %s " % (self.nombre)
