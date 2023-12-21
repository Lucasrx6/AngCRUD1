using Microsoft.AspNetCore.Mvc;
using System;

namespace CalculadoraAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculadoraController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] Calculo calculo)
        {
            try
            {
                double resultado = 0;

                switch (calculo.Operacao)
                {
                    case "+":
                        resultado = calculo.Numero1 + calculo.Numero2;
                        break;
                    case "-":
                        resultado = calculo.Numero1 - calculo.Numero2;
                        break;
                    case "*":
                        resultado = calculo.Numero1 * calculo.Numero2;
                        break;
                    case "/":
                        if (calculo.Numero2 != 0)
                        {
                            resultado = calculo.Numero1 / calculo.Numero2;
                        }
                        else
                        {
                            return BadRequest("Divisão por zero não é permitida.");
                        }
                        break;
                    default:
                        return BadRequest("Operação inválida.");
                }

                return Ok(resultado);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }

    public class Calculo
    {
        public double Numero1 { get; set; }
        public double Numero2 { get; set; }
        public string Operacao { get; set; }
    }
}
