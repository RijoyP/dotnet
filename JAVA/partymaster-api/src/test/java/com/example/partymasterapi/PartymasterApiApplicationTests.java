package com.example.partymasterapi;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.partymasterapi.controller.PartymaterApiController;

@SpringBootTest
class PartymasterApiApplicationTests {

	@Test
	void testMethode1() {
		PartymaterApiController demo = new PartymaterApiController();
		demo.Get();
	}

}
