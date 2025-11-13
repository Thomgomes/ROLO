package com.rolo.ROLO.model.dto;

import lombok.Getter;
import lombok.Setter;

public class TransactionRequest {
	@Getter @Setter public int id;
	@Getter @Setter public int usuarios_id;
	@Getter @Setter public int produto_id;
}
