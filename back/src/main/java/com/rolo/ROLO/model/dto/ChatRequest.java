package com.rolo.ROLO.model.dto;

import lombok.Getter;
import lombok.Setter;

public class ChatRequest {
	@Getter @Setter public int idchat;
	@Getter @Setter public int usuarios_id;
	@Getter @Setter public int usuarios_id1;
	@Getter @Setter public String mensagem;
	@Getter @Setter public String hora;
	@Getter @Setter public String status_envio;
}
